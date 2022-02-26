import { useContext, FC } from 'react';
import { Context } from '../../context/Context';
import Post from '../../types/post';
import PostCard from './PostCard';
import loading from '../../assets/loading.gif';

const Posts: FC = () => {
  const { posts } = useContext(Context);

  return (
    <div>
      {!posts ? (
        <div className="flex h-screen">
          <img src={loading} alt="loading" className="m-auto w-8" />
        </div>
      ) : (
        <div className="mx-auto mt-4 max-w-full sm:max-w-md">
          <ul className="space-y-4">
            {posts &&
              posts.map((post: Post, index: number) => (
                <PostCard post={post} key={index} />
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Posts;
