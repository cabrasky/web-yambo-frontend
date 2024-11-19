import React from 'react';
import MonitorList from '../components/MonitorList';
import { useParams } from 'react-router-dom';
const Monitors: React.FC = () => {
  const { group } = useParams<{ group?: string }>();

  return (
    <>
      <h2 className='text-center'>Monitores{group ? ` de ${group}` : ""}</h2>
      <MonitorList group={group} />
    </>
  );
};

export default Monitors;
