import { FileOutlined, PieChartOutlined, UserOutlined, TeamOutlined, DesktopOutlined } from '@ant-design/icons';
import React from 'react';
import { Link } from "react-router-dom";

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('Dashboard', '1', <Link to={'/'}><PieChartOutlined /></Link>),
  getItem('Clientes', '2', <Link to={'/Customers'}><PieChartOutlined /></Link>),
  getItem('Contratos', '3', <Link to={'/Contracts'}><DesktopOutlined /></Link>),
  getItem('Egresos', 'sub1', <UserOutlined />, [
    getItem('Tom', '4', <Link to={'/Proveedores'}></Link>),
    getItem('Bill', '5'),
    getItem('Alex', '6'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '7'), getItem('Team 2', '8')]),
  getItem('Logout', '9', <Link to={'/Login'}><FileOutlined /></Link>),
];

const permissions = [
  {
    role: 'ADMIN',
    items: ['Dashboard', 'Contratos', 'Clientes']
  },
  {
    role: 'USER',
    items: ['Dashboard', 'Egresos', 'Team']
  }

]
const itemsByRole = (role) => {
  return items.filter(item => permissions.find(per => per.role === role).items.includes(item.label))
}

export { itemsByRole };

