import {  Outlet, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AppRoutes from "./components/AppRoutes";

function App() {
  
  return (
      <div>
        <Header/>
        <AppRoutes/>
        <Footer/>
      </div>
    
  );
}

export default App;
