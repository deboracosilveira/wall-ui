import { useState, useEffect } from 'react';
import { createContext } from 'react';
import { getAllPosts } from '../services/posts';

export const Context = createContext({} as any);

const Provider = ({ children }: { children: any }) => {
  const [posts, setPosts] = useState<any>([]);

  const getPosts = async () => {
    const allPosts = await getAllPosts();
    setPosts(allPosts.data);
  };

  useEffect(() => {
    getPosts();
  }, []);

  const ContextValues = {
    posts
  };

  return (
    <div>
      <Context.Provider value={ContextValues}>{children}</Context.Provider>
    </div>
  );
};

export default Provider;
