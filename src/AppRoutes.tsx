import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Wall } from './pages';

const AppRoutes: FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Wall />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
