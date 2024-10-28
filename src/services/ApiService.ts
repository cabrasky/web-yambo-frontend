import config from '../config';

class ApiService {
    private apiUrl: string;

    constructor(apiUrl: string, settings?: { apiHost?: string }) {
        this.apiUrl = `${settings?.apiHost || config.apiHost}/${apiUrl}`;
    }

    private getHeaders(isFormData: boolean = false): Record<string, string> {
        const headers: Record<string, string> = {};

        if (!isFormData) {
            headers['Content-Type'] = 'application/json';
        }
        
        return headers;
    }

    private async handleResponse(response: Response): Promise<any> {
        if (!response.ok) {
            try {
                const errorData = await response.json();
                throw new Error(`Error ${response.status}: ${errorData.message || response.statusText}`);
            } catch (error) {
                throw new Error(`Error ${response.status}: ${response.statusText}`);
            }
        }
        return response.json();
    }

    async get<T>(endpoint = '', params?: Record<string, string>): Promise<T> {
        const queryString = params
            ? '?' + new URLSearchParams(params).toString()
            : '';
        
        const response = await fetch(`${this.apiUrl}${endpoint}${queryString}`, {
            method: 'GET',
            headers: this.getHeaders(),
        });
        return this.handleResponse(response);
    }

    async post<T>(endpoint: string, data: any, isFormData: boolean = false): Promise<T> {
        const response = await fetch(`${this.apiUrl}${endpoint}`, {
            method: 'POST',
            headers: this.getHeaders(isFormData),
            body: isFormData ? data : JSON.stringify(data),
        });
        return this.handleResponse(response);
    }

    async put<T>(endpoint: string, data: any): Promise<T> {
        const response = await fetch(`${this.apiUrl}${endpoint}`, {
            method: 'PUT',
            headers: this.getHeaders(),
            body: JSON.stringify(data),
        });
        return this.handleResponse(response);
    }

    async delete<T>(endpoint: string): Promise<T> {
        const response = await fetch(`${this.apiUrl}${endpoint}`, {
            method: 'DELETE',
            headers: this.getHeaders(),
        });
        return this.handleResponse(response);
    }
}

export default ApiService;