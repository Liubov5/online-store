import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { authRoutes, publicRoutes } from '../routes';
import { SHOP_ROUTE } from '../utils/consts';
import Shop from '../pages/Shop';
import { useSelector } from 'react-redux';

const AppRoutes = () => {
    const isAuth = useSelector((state)=>state.user.isAuth);
    
    return (
        <Routes>
            {isAuth && authRoutes.map(({path, element})=>
                <Route key={path} path={path} element={element} exact/>
            )}
            {publicRoutes.map(({path, element})=>
                <Route key={path} path={path} element={element} exact></Route>
            )}
            <Route path="*" element={<Shop/>} />
        </Routes>
    )
}

export default AppRoutes