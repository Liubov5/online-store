import {  Outlet, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AppRoutes from "./components/AppRoutes";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { check, setIsAuth } from "./store/userSlice";
import Spinner from 'react-bootstrap/Spinner';

function App() {
  const {user} = useSelector(({user})=>user);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(()=>{
   setTimeout(()=>{dispatch(check()).then(dispatch(setIsAuth(true))).finally(()=>setLoading(false))} , 1000)
    
    //тут переделать хуйня какая-то получается
  }, [dispatch])

  if(loading) {
    return <Spinner animation="grow"/>
  }

  return (
      <div>
        <Header/>
        <AppRoutes/>
        <Footer/>
      </div>
    
  );
}

export default App;
