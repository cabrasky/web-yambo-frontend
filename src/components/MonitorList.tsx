import React, { useEffect, useState } from 'react';
import { Monitor } from '../types/Monitor';
import MonitorService from '../services/MonitorService';

interface props {
  group?: string;
}

const MonitorList: React.FC<props> = ({group}) => {
  const [monitors, setMonitors] = useState<Monitor[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMonitors = async () => {
      setLoading(true);
      try {
        const monitorsData = group
          ? await MonitorService.getAllMonitorsByGroupName(group)
          : await MonitorService.getAllMonitors();

        setMonitors(monitorsData);
      } catch (err) {
        setError('Failed to fetch monitors');
      } finally {
        setLoading(false);
      }
    };

    fetchMonitors();
  }, [group]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="row">
      {monitors.length > 0 ? (
        monitors.map(monitor => (
          <div key={monitor.id} className="col-md-6 col-lg-4">
            <div className='card' style={{ margin: "2rem 0px" }}>
              <img src={monitor.image} alt={`Monitor ${monitor.name}`} className="card-img" style={{objectFit: "cover",  objectPosition: "50% 50%", width:"100%", height:"400px"}}/>
              <div className="card-body">
                <h3 className="card-title text-center">{monitor.name}</h3>
                <h6 className="grupos card-subtitle text-center">
                  {monitor.groups.map(group => (
                    <a href={`/monitores/${group.name}/`} style={{ margin: "0px 20px" }} >{group.name}</a>
                  ))}
                </h6>
                <p className="card-text">{monitor.description}</p>
              </div>
            </div>
          </div>

        ))
      ) : (
        <div>No hay monis en este grupo 🥲</div>
      )}
    </div>
  );
};

export default MonitorList;
