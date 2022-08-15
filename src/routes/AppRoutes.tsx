import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { routesPathsEnum } from '../enums';
import MainPage from '../pages/MainPage/MainPage';
import CurrencyPage from '../pages/CurrencyPage/CurrencyPage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ routesPathsEnum.MAIN } element={ <MainPage/> }/>
      <Route path={ routesPathsEnum.CURRENCY } element={ <CurrencyPage/> }/>
      <Route path={ '*' } element={ <NotFoundPage/> }/>
    </Routes>
  );
};

export default AppRoutes;