import  { useRef } from 'react';
import Navbar from './components/Navbar'
import { Outlet, useLocation } from 'react-router-dom'
import Backtoback from './components/Backtoback'

const Layout = () => {
  const location = useLocation();
  const collectionRef = useRef(null);

  return (
    <>
     {location.pathname === '/' && <Backtoback />}
     <Navbar/> 
     <Outlet context={{ collectionRef }}/>
    </>
  )
}

export default Layout;
