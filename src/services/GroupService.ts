import ApiService from './ApiService';
import { Group } from '../types/Group';

class GroupService extends ApiService {
    constructor() {
        super('groups');
    }

    async getAllGroups(): Promise<Group[]> {
        return this.get('');
    }
}

const groupService = new GroupService();
export default groupService;
