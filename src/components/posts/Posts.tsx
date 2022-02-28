import { useContext, FC } from 'react';
import { Context } from '../../context/Context';
import Post from '../../types/post';
import PostCard from './PostCard';
import { Loader } from '..';

const Posts: FC = () => {
  const { loading, posts } = useContext(Context);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div className="mx-auto mt-4 max-w-full sm:max-w-md">
          <ul className="space-y-4">
            {posts?.map((post: Post, index: number) => (
              <PostCard post={post} key={index} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Posts;
