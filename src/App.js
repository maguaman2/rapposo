import { FileOutlined, PieChartOutlined, UserOutlined, TeamOutlined, DesktopOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import React,{ useState } from 'react';
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
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div
          style={{
            height: 32,
            margin: 16,
            background: 'rgba(255, 255, 255, 0.2)',
          }}
        />
        <Menu
            theme="dark" 
            defaultSelectedKeys={['1']} 
            mode="inline" 
            items={items} />
      </Sider>
      <Layout className="site-layout">
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/contracts" element={<Contracts />} />
              <Route path="/products" element={<Products />} />
              <Route path="/providers" element={<Providers />} />
              <Route path="/Login" element={<Login />} />
            </Routes>
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
    </BrowserRouter>
  );
};
export default App;

