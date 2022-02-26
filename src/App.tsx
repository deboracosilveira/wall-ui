import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import Provider from './context/Context';
import AppRoutes from './AppRoutes';
import { Header } from './components';

const App: FC = () => {
  const location = useLocation().pathname;

  return (
    <Provider>
      {location === '/' && <Header />}
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <AppRoutes />
      </div>
    </Provider>
  );
};

export default App;
