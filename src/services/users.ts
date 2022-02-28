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

export const starNewUserSession = async (
  email: string,
  password: string
): Promise<any> => {
  try {
    const response = await axiosClient.post('/signin', {
      user: {
        email,
        password
      }
    });

    return Promise.resolve(response?.data);
  } catch (error: any) {
    return error.response.data;
  }
};

export const deleteUserSession = async (): Promise<any> => {
  try {
    const response = await axiosClient.delete('/signout');

    return Promise.resolve(response);
  } catch (error: any) {
    return Promise.reject(error);
  }
};
