import { FC } from 'react';
import loading from '../../assets/loading.gif';

const Loader: FC = () => (
  <img src={loading} alt="loading" className="m-auto w-6" />
);
export default Loader;
