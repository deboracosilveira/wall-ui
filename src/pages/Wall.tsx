import { FC } from 'react';
import { Posts } from '../components';

const Wall: FC = () => {
  document.body.style.background = '#f3f4f6';

  return <Posts />;
};

export default Wall;
