import React from 'react';
import { BrowserRouter,  Route, Routes } from "react-router-dom";
import { AppContext } from "./Context/AppContext";
import Customers from './Customers';
import Dashboard from './Dashboard';
import Providers from './Providers';
import Products from './Products';
import Contracts from './Contracts';
import Login from './Login';
import SideBar from './sideBarMenu/SideBar';
import { getRoleFromToken } from "./auth/Headers";
import jwt from 'jwt-decode';

const App = () => {  
  const { role, setRole } = React.useContext(AppContext);
  
  if ( !!getRoleFromToken ) 
    setRole(jwt(getRoleFromToken).roles);
  
  return (
    <BrowserRouter>
      {role === '' ?        
          <Routes>
            <Route index element={<Login />} />
          </Routes>
         : 
          <SideBar>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/contracts" element={<Contracts />} />
              <Route path="/products" element={<Products />} />
              <Route path="/providers" element={<Providers />} />
              <Route path="/customers" element={<Customers />} />
            </Routes>
          </SideBar>        
      }
    </BrowserRouter>
  );
};
export default App;

