import { useContext, FC } from 'react';
import { Context } from '../context/Context';

const Wall: FC = () => {
  const { posts } = useContext(Context);

  return <div className="text-blue-500">wall</div>;
};

export default Wall;
