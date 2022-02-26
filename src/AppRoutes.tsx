import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SignUpIn, Wall } from './pages';

const AppRoutes: FC = () => (
  <Routes>
    <Route path="/" element={<Wall />} />
    <Route path="/sign-up" element={<SignUpIn />} />
    <Route path="/sign-in" element={<SignUpIn />} />
  </Routes>
);

export default AppRoutes;
