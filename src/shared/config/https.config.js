import axios from 'axios';
import { getCookie } from 'cookies-next';

// const BASE_URL = process.env.URL_BACKEND_LOCAL;
const BASE_URL = "https://localhost:7250/api"

class AxiosConfig {
  constructor() {
    this.baseUrl = BASE_URL;
    this.axiosConfig = {
      baseURL: this.baseUrl,
      headers: {
        'Accept-Language': 'en-US',
        'Content-Type': 'application/json',
      },
    };
  }
  getAxiosInstanceNoAuth() {
    const axiosInstance = axios.create(this.axiosConfig);
    axios.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response.status === 403) {
          return Promise.reject(error);
        }
        return Promise.reject(error);
      }
    );
    return axiosInstance;
  }
}

const httpsNoToken = new AxiosConfig().getAxiosInstanceNoAuth();
export { httpsNoToken };
