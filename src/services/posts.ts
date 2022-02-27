import axiosClient from './axiosClient';

export const getAllPosts = async (): Promise<any> => {
  try {
    const response = await axiosClient.get('/posts');

    return Promise.resolve(response?.data);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const creatPost = async (content: string): Promise<any> => {
  axiosClient.interceptors.request.use(function (config: any) {
    const token = localStorage.getItem('token');
    config.headers.Authorization = token ? `Bearer ${token}` : '';
    return config;
  });

  try {
    const response = await axiosClient.post('/posts', { post: { content } });

    return Promise.resolve(response?.data);
  } catch (error) {
    return Promise.reject(error);
  }
};
