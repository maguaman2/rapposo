import { FileOutlined, PieChartOutlined, UserOutlined, TeamOutlined, DesktopOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import React, { useState } from 'react';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Customers from './Customers';
import Dashboard from './Dashboard';
import Providers from './Providers';
import Products from './Products';
import Contracts from './Contracts';
import Login from './Login';

const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('Clientes', '1', <Link to={'/Customers'}><PieChartOutlined /></Link>),
  getItem('Contratos', '2', <Link to={'/Contracts'}><DesktopOutlined /></Link>),
  getItem('Egresos', 'sub1', <UserOutlined />, [
    getItem('Tom', '3', <Link to={'/Proveedores'}></Link>),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Login', '9', <Link to={'/Login'}><FileOutlined /></Link>),
];
const App = () => {

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <BrowserRouter>    
    <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/contracts" element={<Contracts />} />
                <Route path="/products" element={<Products />} />
                <Route path="/providers" element={<Providers />} />
            </Routes>
    </BrowserRouter>
  );
};
export default App;

