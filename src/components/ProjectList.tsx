import React, { useEffect, useState } from 'react';
import { Project } from '../types/Project';
import ProjectService from '../services/ProjectService';
import "../assets/styles/ProjectList.css"

const ProjectList: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await ProjectService.getAllProjects();
        setProjects(data);
      } catch (error) {
        setError('Failed to fetch projects');
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="row">
      {error && <p className="error">{error}</p>}
      {projects.map((project) => (
        <div className="col-lg-6 mb-3" key={project.id}>
          <div className="card">
            <img
              src={`${project.logo}`}
              className="card-img-top mx-auto"
              alt={`Logo ${project.name}`}
            />
            <div className="card-body">
              <h5 className="card-title">{project.name}</h5>
              <p className="card-text">{project.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
