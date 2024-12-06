import { BrowserRouter, Routes, Route } from 'react-router';
import Home from '@pages/Home.tsx';

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
