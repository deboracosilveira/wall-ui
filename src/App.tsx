import { FC } from 'react';
import Provider from './context/Context';
import AppRoutes from './AppRoutes';
import { Header } from './components';

const App: FC = () => {
  return (
    <Provider>
      <Header />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AppRoutes />
      </div>
    </Provider>
  );
};

export default App;
