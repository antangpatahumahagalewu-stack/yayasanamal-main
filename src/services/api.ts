import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error);
    return Promise.reject(error);
  }
);

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}


export const contactAPI = {
  submit: async (data: ContactFormData) => {
    const response = await api.post('/contact/submit', data);
    return response.data;
  },
  
  getAll: async () => {
    const response = await api.get('/contact/list');
    return response.data;
  },
};


export const contentAPI = {
  getPrograms: async () => {
    const response = await api.get('/content/programs');
    return response.data;
  },
  
  getProgramById: async (id: string) => {
    const response = await api.get(`/content/programs/${id}`);
    return response.data;
  },
  
  getNews: async (limit = 10, offset = 0) => {
    const response = await api.get('/content/news', {
      params: { limit, offset },
    });
    return response.data;
  },
  
  getNewsById: async (id: string) => {
    const response = await api.get(`/content/news/${id}`);
    return response.data;
  },
  
  getGallery: async (category?: string, limit = 20, offset = 0) => {
    const response = await api.get('/content/gallery', {
      params: { category, limit, offset },
    });
    return response.data;
  },
  
  getFAQs: async (category?: string) => {
    const response = await api.get('/content/faqs', {
      params: { category },
    });
    return response.data;
  },
};

export default api;
