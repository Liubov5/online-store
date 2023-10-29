import React from 'react';
import {Routes, Route} from 'react-router-dom';
import { authRoutes, publicRoutes } from '../routes';
import NotFound from '../pages/NotFound';

const AppRouter = () => {
  const isAuth = false;
  return (
    <Routes>
      {isAuth && authRoutes.map(({path, Component})=>{
        return <Route key={path} exact path={path} element={Component} />
      })}
      { publicRoutes.map(({path, Component})=>{
        return <Route key={path} exact path={path} element={Component} />
      })}
      
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  )
}

export default AppRouter