import ApiService from './ApiService';
import { ContactMessage } from '../types/ContactMessage';

class ContactService extends ApiService {
    constructor() {
        super('contact');
    }

    async sendMessage(message: ContactMessage): Promise<string> {
        const response = await this.post<Map<string, string>>('/send', message);
        if (response && response.get("message")) {
            return response.get("message")!;
        } else if (response && response.get("error")) {
            throw new Error(response.get("error"));
        } else {
            throw new Error('Unexpected response format.');
        }
    }
}

const contactService = new ContactService();
export default contactService;
