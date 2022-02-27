import axiosClient from './axiosClient';

export const registerUser = async (
  name: string,
  email: string,
  password: string
): Promise<any> => {
  try {
    const response = await axiosClient.post('/signup', {
      user: {
        name,
        email,
        password
      }
    });

    return Promise.resolve(response?.data);
  } catch (error: any) {
    return error.response.data;
  }
};
