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
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      style={{
        maxWidth: 600,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    
</div>
  );
}


export default Login