import { useContext, FC } from 'react';
import { Context } from '../context/Context';

const Wall: FC = () => {
  const { posts } = useContext(Context);

  return <div>Wall</div>;
};

export default Wall;
