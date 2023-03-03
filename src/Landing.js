import React from "react"
import { Button, Checkbox, Form, Input } from 'antd';
import { login } from "./services/SecurityService";
import jwt from 'jwt-decode';
import { AppContext } from "./Context/AppContext";
import { saveToken } from "./auth/Headers";


function Login() {
  const {  setRole } = React.useContext(AppContext);

  const onFinish = (values) => {
    login({ email: values.username, password: values.password })
      .then(resp =>{
        
        setRole(jwt(resp.token).roles);
        saveToken(resp.token);
      }
      )
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div style={{display:'grid',alignContent:'center'}}>
 <h1>anding</h1>
</div>
  );
}


export default Login