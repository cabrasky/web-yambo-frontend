import ApiService from './ApiService';
import { ContactMessage } from '../types/ContactMessage';

class ContactService extends ApiService {
    constructor() {
        super('contact');
    }

    async sendMessage(message: ContactMessage): Promise<string> {
        const response = await this.post<{
            message?: string;
            error?: string;
        }>('/send', message);
        if (response && response["message"]) {
            return response["message"];
        } else if (response && response["error"]) {
            throw new Error(response["error"]);
        } else {
            throw new Error('Unexpected response format.');
        }
    }
}

const contactService = new ContactService();
export default contactService;
