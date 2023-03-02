import React, { useState, useEffect } from "react";
import { AppContext } from "./Context/AppContext";
import getHeadersAndToken from './auth/Headers'
import { listCustomer, createCustomer } from './services/CustomerService'
import { Space, Table, Tag } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, DatePicker, Drawer, Form, Input, Row, Select } from 'antd';
const { Option } = Select;

function Customers(){
  const { role } = React.useContext(AppContext);
  const [open, setOpen] = useState(false);
  const [customers, setCustomers] = useState([]);
  const [customer, setCustomer] = useState({});

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const onSubmit = () => {
    console.log(customer)
    //createCustomer(values).then(response => console.log(response))
  };

  const onChange = (event) => {
    console.log(event.target.name)
    setCustomer({
      ...customer,
      [event.target.id]: event.target.value
    })
  };
  useEffect(() => {
    listCustomer().then(data => {
      setCustomers(data);   
    }
    );
  }, []);



  const columns = [
    {
      title: 'Cedula',
      dataIndex: 'nui',
      key: 'nui',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Nombres',
      dataIndex: 'firstname',
      key: 'firstname',
    },
    {
      title: 'Apellido',
      dataIndex: 'lastname',
      key: 'lastname',
    },
    {
      title: 'Correo',
      dataIndex: 'email',
      key: 'email',
    },

    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a>Edit {record.nui}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  return (
<>
      <Button type="primary" onClick={showDrawer} icon={<PlusOutlined />}>
        Agregar
      </Button>
      <Drawer
        title="Create a new account"
        width={720}
        onClose={onClose}
        open={open}
        bodyStyle={{
          paddingBottom: 80,
        }}
        extra={
          <Space>
            <Button onClick={onClose}>Cancelar</Button>
            <Button onClick={onSubmit} type="primary">
              Guardar
            </Button>
          </Space>
        }
      >
        <Form layout="vertical" hideRequiredMark>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name={[customer.firstaname]}
                label="Nombre"
                value={customer.firstaname}
                onChange={onChange}
                rules={[
                  {
                    required: true,
                    message: 'Please enter user name',
                  },
                ]}
              >
                <Input placeholder="Please enter user name" />
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item
                name="lastname"
                label="lastname"
                value={customer.firstaname}
                onChange={onChange}
                rules={[
                  {
                    required: true,
                    message: 'Please enter user name',
                  },
                ]}
              >
                <Input placeholder="Please enter user name" />
              </Form.Item>
            </Col>

          </Row>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                
                rules={[
                  {
                    required: true,
                    message: 'Please enter user name',
                  },
                ]}
              >
                <Input 
                name="nui"
                label="Cedula"
                value={customer.nui}
                onChange={onChange}
                placeholder="Please enter user name" />
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item
                name="email"
                label="Correo"
                value={customer.email}
                onChange={onChange}
                rules={[
                  {
                    required: true,
                    message: 'Please enter user name',
                  },
                ]}
              >
                <Input placeholder="Please enter user name" />
              </Form.Item>
            </Col>

          </Row>

        </Form>
      </Drawer>



      <Table columns={columns} dataSource={customers} />
    </>
  );
}


export default Customers