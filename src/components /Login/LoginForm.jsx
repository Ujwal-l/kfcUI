import React from 'react';
import {
  AlipayCircleOutlined,
  LockOutlined,
  MobileOutlined,
} from '@ant-design/icons';
import { ProForm, ProFormDigit, ProFormText } from '@ant-design/pro-components';
import { Space, Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const iconStyles = {
  marginInlineStart: '16px',
  color: 'rgba(0, 0, 0, 0.2)',
  fontSize: '24px',
  verticalAlign: 'middle',
  cursor: 'pointer',
};

const waitTime = (time = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

const LoginF = () => {
  const navigate = useNavigate();

  const handleLogin = () => navigate('/home');
  return (
    <div>
      <ProForm
        title='Github'
        submitter={
          // searchConfig: {
          //   submitText: 'Login',
          // },
          // resetButtonProps: {
          //   hidden: true,
          // },
          false
        }
        style={{
          backgroundColor: 'white',
          padding: 40,
          height: 260,
          borderRadius: 15,
        }}
      >
        <ProFormDigit
          name='mobile'
          type='number'
          fieldProps={{
            size: 'large',
            prefix: <MobileOutlined className={'prefixIcon'} />,
          }}
          placeholder='Phone no'
          rules={[
            {
              required: true,
              message: 'Enter your mobile number!',
            },
          ]}
        />
        <ProFormText.Password
          name='pin'
          fieldProps={{
            size: 'large',
            prefix: <LockOutlined className={'prefixIcon'} />,
          }}
          placeholder='PIN'
          rules={[
            {
              required: true,
              message: 'Enter your PIN!',
            },
          ]}
        />
        <div className='flex justify-center'>
          <Button
            type='primary'
            style={{
              width: 'auto',
            }}
            onClick={handleLogin}
          >
            Login
          </Button>
        </div>
      </ProForm>
    </div>
  );
};

export default LoginF;
