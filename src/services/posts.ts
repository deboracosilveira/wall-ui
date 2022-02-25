import axiosClient from './axiosClient';

export const getAllPosts = async (): Promise<any> => {
  try {
    const response = await axiosClient.get('/posts');

    return Promise.resolve(response?.data);
  } catch (error) {
    return Promise.reject(error);
  }
};
