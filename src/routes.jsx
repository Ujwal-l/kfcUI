import React from 'react';

import { Route, Routes } from 'react-router-dom';

//internal
import Login from './components /Login/login';
import LoginF from './components /Login/LoginForm';
import Home from './components /Home/Home';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/login' element={<Login />} />
      <Route path='/home' element={<Home />} />
    </Routes>
  );
};

export default AppRoutes;
