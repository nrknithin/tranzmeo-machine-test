/**
 * Login Page
 *
 * This is the login Page
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { KeyOutlined } from '@ant-design/icons';
import { Alert } from 'antd';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import TogglePassIcon from './TogglePassIcon';
import LoginWrapper from './LoginWrapper';
import LoginInput from './LoginInput';
import LoginContainer from './LoginContainer';
import LoginButton from './LoginButton';
import Logo from '../../images/logo.png';
import { login } from '../../api';
import { setLoggedIn } from '../App/redux/actions';

const LoginPage = ({ onLoginSuccess }) => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);
  const [password, setPassword] = useState('');
  const [isPassword, setIsPassword] = useState(true);
  const [isEmailEmpty, setIsEmailEmpty] = useState(false);
  const [isPasswordEmpty, setIsPasswordEmpty] = useState(false);
  // functions start

  // toggle password visibilty
  const toggleIsPassword = () => {
    setIsPassword(!isPassword);
  };

  // check authentication
  const handleLogin = async () => {
    try {
      setLoading(true);
      if (email.trim('') === '' || password.trim('') === '') {
        setIsEmailEmpty(email.trim('') === '');
        setIsPasswordEmpty(password.trim('') === '');
        return 0;
      }
      const PAYLOAD = {
        strategy: 'local',
        email,
        password,
      };

      const res = await login(PAYLOAD);
      onLoginSuccess(email, res.accessToken);
    } catch (e) {
      setIsEmailEmpty(true);
      setIsPasswordEmpty(true);
      setError(true);
    } finally {
      setLoading(false);
    }
    return 0;
  };
  // functions end
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
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <img width="123" height="123" src={Logo} alt="hello" />
          <div style={{ fontWeight: '700' }}>Login</div>
        </div>
        <div>
          <LoginInput
            addonBefore={
              <div style={{ minWidth: '15px', display: 'flex' }}>@</div>
            }
            placeholder="email@domain.com"
            type="email"
            defaultValue={email}
            onBlur={e => setEmail(e.target.value)}
            onFocus={() => {
              setError(false);
              setIsEmailEmpty(false);
            }}
            status={isEmailEmpty ? 'error' : ''}
            disabled={loading}
          />
          <LoginInput
            addonBefore={
              <div
                style={{
                  minWidth: '15px',
                  display: 'flex',
                  transform: 'rotate(180deg) scaleX(-1)',
                }}
              >
                <KeyOutlined />
              </div>
            }
            addonAfter={
              <div style={{ minWidth: '15px', display: 'flex' }}>
                <TogglePassIcon
                  isPassword={isPassword}
                  toggleIsPassword={toggleIsPassword}
                />
              </div>
            }
            placeholder="********"
            type={isPassword ? 'password' : 'text'}
            defaultValue={password}
            onBlur={e => setPassword(e.target.value)}
            onFocus={() => {
              setError(false);
              setIsPasswordEmpty(false);
            }}
            status={isPasswordEmpty ? 'error' : ''}
            disabled={loading}
          />
        </div>
        <div>
          {error && (
            <Alert
              message="Login Failed, Please check your credentials"
              type="error"
              style={{ maxHeight: '30px' }}
            />
          )}
        </div>
        <LoginButton type="primary" onClick={handleLogin} disabled={loading}>
          Login
        </LoginButton>
      </LoginWrapper>
    </LoginContainer>
  );
};

LoginPage.propTypes = {
  onLoginSuccess: PropTypes.func,
};
export function mapDispatchToProps(dispatch) {
  return {
    onLoginSuccess: (email, token) => {
      dispatch(setLoggedIn(email, token));
    },
  };
}

export default connect(
  null,
  mapDispatchToProps,
)(LoginPage);
