import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
return (
  {children}
);  
};