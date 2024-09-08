import {  Outlet, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AppRoutes from "./components/AppRoutes";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { check, setIsAuth } from "./store/userSlice";
import Spinner from 'react-bootstrap/Spinner';
import { fetchBrands, fetchDevices, fetchTypes, setSelectedBrand, setSelectedType, setTotalCount } from "./store/deviceSlice";


function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const device = useSelector(({device})=>device);


  useEffect(()=>{
  //  setTimeout(()=>{dispatch(check()).then(dispatch(setIsAuth(true))).finally(()=>setLoading(false))} , 1000)
    setTimeout(()=>{dispatch(check()).then(()=>setLoading(false))} , 1000)

    //тут переделать хуйня какая-то получается
  }, []);



  useEffect(()=>{
    dispatch(fetchBrands());
    dispatch(fetchTypes());
    dispatch(fetchDevices({typeId:null, brandId:null, page:1,limit:5})).then(({payload})=>{
      dispatch(setTotalCount(payload.count))
    });
    
  },[dispatch]); 


  if(loading) {
    return <Spinner animation="grow"/>
  }

  return (
      <div>
        <Header/>
        <AppRoutes/>
        {/* <Footer/> */}
      </div>
    
  );
}

export default App;
