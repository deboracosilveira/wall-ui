import { FC } from 'react';
import { PostForm, Posts } from '../components';

const Wall: FC = () => {
  document.body.style.background = '#f3f4f6';

  return (
    <div className="my-8">
      <PostForm />
      <Posts />
    </div>
  );
};

export default Wall;
