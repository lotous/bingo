import { AuthInterceptorService } from './auth-interceptor.service';
import { AxiosInstance, AxiosResponse } from 'axios';

class AxiosAdapter {

    client: AxiosInstance;

    constructor(baseUrl?: string) {
        this.client = AuthInterceptorService(baseUrl);
    }

    async get(url: string, conf = {}): Promise<AxiosResponse> {
        try {
            const response = await this.client.get(url, conf);
            return response;
        } catch (error) {
            return await Promise.reject(error);
        }
    }

    async delete(url: string, conf = {}): Promise<AxiosResponse> {
        try {
            const response = await this.client.delete(url, conf);
            return response;
        } catch (error) {
            return await Promise.reject(error);
        }
    }

    async head(url: string, conf = {}): Promise<AxiosResponse> {
        try {
            const response = await this.client.head(url, conf);
            return response;
        } catch (error) {
            return await Promise.reject(error);
        }
    }

    async options(url: string, conf = {}): Promise<AxiosResponse> {
        try {
            const response = await this.client.options(url, conf);
            return response;
        } catch (error) {
            return await Promise.reject(error);
        }
    }

    async post(url: string, data = {}, conf = {}): Promise<AxiosResponse> {
        try {
            const response = await this.client.post(url, data, conf);
            return response;
        } catch (error) {
            return await Promise.reject(error);
        }
    }

    async put(url: string, data = {}, conf = {}): Promise<AxiosResponse> {
        try {
            const response = await this.client.put(url, data, conf);
            return response;
        } catch (error) {
            return await Promise.reject(error);
        }
    }

    async patch(
        url: string,
        data = {},
        conf = {}
    ): Promise<AxiosResponse> {
        try {
            const response = await this.client.patch(url, data, conf);
            return response;
        } catch (error) {
            return await Promise.reject(error);
        }
    }
}

export { AxiosAdapter };
