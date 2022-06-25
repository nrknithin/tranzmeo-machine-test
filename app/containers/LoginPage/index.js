/*
 *
 * LanguageToggle
 *
 */

import React from 'react';
import { Input } from 'antd';
import { EyeOutlined, HeartOutlined } from '@ant-design/icons';
import { Helmet } from 'react-helmet';

import styled from 'styled-components';

const LoginPage = () => {
  const LoginContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: lightgray;
  `;

  const LoginWrapper = styled.div`
    width: 100%;
    height: 100%;
    max-width: 500px;
    max-height: 300px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: white;
    border-radius: 5px;
    padding: 20px;
    flex-direction: column;
  `;
  return (
    <LoginContainer>
      <Helmet>
        <title>Login Page</title>
        <meta
          name="description"
          content="A React.js Boilerplate application homepage"
        />
      </Helmet>

      <LoginWrapper>
        <div>
          <HeartOutlined style={{ fontSize: '30px' }} />
        </div>
        <Input addonBefore="@" defaultValue="email@domain.com" />
        <Input
          addonBefore="@"
          addonAfter={<EyeOutlined />}
          defaultValue="email@domain.com"
        />
      </LoginWrapper>
    </LoginContainer>
  );
};

export default LoginPage;
