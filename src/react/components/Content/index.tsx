import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home';
import MainLayout from '../../layouts/MainLayout';
// import NotFound from '../../pages/NotFound';
// import Cart from '../../pages/Cart';
// import FullPizzaInfo from '../../pages/FullPizzaInfo';

const Content: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        123
        <Route path="" element={<Home />} />
        {/* <Route path=":id" element={<FullPizzaInfo />} />
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} /> */}
      </Route>
    </Routes>
  );
};

export default Content;
