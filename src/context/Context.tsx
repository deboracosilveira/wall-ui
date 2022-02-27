import { useState, useEffect } from 'react';
import { createContext } from 'react';
import { getAllPosts } from '../services/posts';
import { registerUser } from '../services/users';
import Post from '../types/post';

export const Context = createContext({} as any);

const Provider = ({ children }: { children: any }) => {
  const [posts, setPosts] = useState<Post[]>();
  const [signUpResponse, setSignUpResponse] = useState<any>(undefined);

  const getPosts = async () => {
    const allPosts = await getAllPosts();
    setPosts(allPosts.data);
  };

  const signUserUp = async (name: string, email: string, password: string) => {
    const response = await registerUser(name, email, password);

    if (response && response.errors) {
      setSignUpResponse({ type: 'error', message: response.errors.message });
    } else {
      setSignUpResponse({ type: 'info', message: response.data.message });
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  const ContextValues = {
    posts,
    signUserUp,
    signUpResponse
  };

  return (
    <div>
      <Context.Provider value={ContextValues}>{children}</Context.Provider>
    </div>
  );
};

export default Provider;
