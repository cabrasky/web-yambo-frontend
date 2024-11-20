import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Group } from '../types/Group';
import groupService from '../services/GroupService';

const Navbar: React.FC = () => {
  const [groups, setGroups] = useState<Group[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await groupService.getAllGroups();
        setGroups(data);
      } catch (err) {
        console.error('Error fetching projects:', err);
        setError('Failed to load groups. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);
  return (
    <header>
      <nav className="navbar navbar-expand-md bg-light sticky-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src="/yambo-logo.png" alt="Yambo" height="30" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Inicio</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Monitores
                </Link>
                <ul className="dropdown-menu">
                  {loading ? (
                    <li><span className="dropdown-item">Loading...</span></li>
                  ) : error ? (
                    <li><span className="dropdown-item text-danger">{error}</span></li>
                  ) : (
                    <>
                      <li>
                        <Link className="dropdown-item" to={"/monitores/"}>
                          Todos
                        </Link>
                      </li>
                      {groups.map(group => (
                        <li key={group.id}>
                          <Link className="dropdown-item" to={`/monitores/${group.name}/`}>
                            {group.name.charAt(0).toUpperCase() + group.name.slice(1)}
                          </Link>
                        </li>
                      ))}
                    </>
                  )}
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/contacto">Contacto</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
