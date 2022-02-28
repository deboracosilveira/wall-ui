import { useState, useEffect } from 'react';
import { createContext } from 'react';
import { getAllPosts, creatPost } from '../services/posts';
import {
  registerUser,
  starNewUserSession,
  deleteUserSession
} from '../services/users';
import Post from '../types/post';
import User from '../types/user';

interface SignUpInResponse {
  type: string;
  message: string;
}

export const Context = createContext({} as any);

const Provider = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState<Post[] | null>(null);
  const [signUpResponse, setSignUpResponse] = useState<SignUpInResponse | null>(
    null
  );
  const [signInResponse, setSignInResponse] = useState<SignUpInResponse | null>(
    null
  );
  const [user, setUser] = useState<User | null>(null);

  const getPosts = async () => {
    setLoading(true);
    const allPosts = await getAllPosts();
    setPosts(allPosts.data);
    setLoading(false);
  };

  const newPost = async (content: string) => {
    setLoading(true);
    await creatPost(content);
    getPosts();
    setLoading(false);
  };

  const signUserUp = async (name: string, email: string, password: string) => {
    setLoading(true);
    const response = await registerUser(name, email, password);

    if (response.data) {
      setSignUpResponse({ type: 'info', message: response.data.message });
    } else {
      setSignUpResponse({ type: 'error', message: response.errors.message });
    }
    setLoading(false);
  };

  const signUserIn = async (email: string, password: string) => {
    setLoading(true);
    const response = await starNewUserSession(email, password);

    if (response.data && response.token) {
      localStorage.setItem('token', response.token);
      localStorage.setItem('user', JSON.stringify(response.data));

      setUser(response.data);
    } else {
      setSignInResponse({ type: 'error', message: response.errors.message });
      setUser(null);
    }
    setLoading(false);
  };

  const getLoggedUser = () => {
    const loggedUser = JSON.parse(localStorage.getItem('user') || '{}');
    const loggedUserToken = localStorage.getItem('token');
    if (loggedUser && loggedUserToken) {
      setUser(loggedUser);
    }
  };

  const signUserOut = async () => {
    const response = await deleteUserSession();

    if (response.status === 204) {
      setUser(null);
      localStorage.setItem('token', '');
      localStorage.setItem('user', '');
    }
  };

  useEffect(() => {
    getPosts();
    getLoggedUser();
  }, []);

  const ContextValues = {
    loading,
    posts,
    signUserUp,
    signUpResponse,
    signUserIn,
    signInResponse,
    user,
    newPost,
    signUserOut
  };

  return (
    <div>
      <Context.Provider value={ContextValues}>{children}</Context.Provider>
    </div>
  );
};

export default Provider;
