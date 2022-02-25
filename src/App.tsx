import { FC } from 'react';
import Provider from './context/Context';
import AppRoutes from './AppRoutes';

const App: FC = () => {
  return (
    <Provider>
      <AppRoutes />
    </Provider>
  );
};

export default App;
