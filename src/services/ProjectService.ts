import ApiService from './ApiService';
import { Project } from '../types/Project';

class ProjectService extends ApiService {
    constructor() {
        super('projects');
    }

    async getAllProjects(): Promise<Project[]> {
        return this.get('');
    }
}

const projectService = new ProjectService();
export default projectService;
