import ApiService from './ApiService';
import { Monitor } from '../types/Monitor';

class MonitorService extends ApiService {
    constructor() {
        super('monitors');
    }

    async getAllMonitors(): Promise<Monitor[]> {
        return this.get<Monitor[]>();
    }
    
    async getAllMonitorsByGroupName(groupName: string): Promise<Monitor[]> {
        return this.get<Monitor[]>('', { groupName });
    }
}

const monitorService = new MonitorService();
export default monitorService;