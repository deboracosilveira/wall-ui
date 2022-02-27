import { useState, useEffect } from 'react';
import { createContext } from 'react';
import { getAllPosts } from '../services/posts';
import { registerUser, starNewUserSession } from '../services/users';
import Post from '../types/post';
import User from '../types/user';

export const Context = createContext({} as any);

const Provider = ({ children }: { children: any }) => {
  const [posts, setPosts] = useState<Post[] | null>(null);
  const [signUpResponse, setSignUpResponse] = useState<any>(null);
  const [signInResponse, setSignInResponse] = useState<any>(null);
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);

  const getPosts = async () => {
    const allPosts = await getAllPosts();
    setPosts(allPosts.data);
  };

  const signUserUp = async (name: string, email: string, password: string) => {
    const response = await registerUser(name, email, password);

    if (response.data) {
      setSignUpResponse({ type: 'info', message: response.data.message });
    } else {
      setSignUpResponse({ type: 'error', message: response.errors.message });
    }
  };

  const signUserIn = async (email: string, password: string) => {
    const response = await starNewUserSession(email, password);

    if (response.data && response.token) {
      localStorage.setItem('token', response.token);
      localStorage.setItem('user', JSON.stringify(response.data));

      setUser(response.data);
      setToken(response.token);
    } else {
      setSignInResponse({ type: 'error', message: response.errors.message });
      setUser(null);
      setToken(null);
    }
  };

  const getLoggedUser = () => {
    const loggedUser = JSON.parse(localStorage.getItem('user') || '{}');
    const loggedUserToken = localStorage.getItem('token');
    if (loggedUser && loggedUserToken) {
      setUser(loggedUser);
      setToken(loggedUserToken);
    }
  };

  useEffect(() => {
    getPosts();
    getLoggedUser();
  }, []);

  const ContextValues = {
    posts,
    signUserUp,
    signUpResponse,
    signUserIn,
    signInResponse,
    user
  };

  return (
    <div>
      <Context.Provider value={ContextValues}>{children}</Context.Provider>
    </div>
  );
};

export default Provider;
