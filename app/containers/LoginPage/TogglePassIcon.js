import React from 'react';
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';

const TogglePassIcon = ({ isPassword, toggleIsPassword }) => (
  <>
    {isPassword ? (
      <EyeOutlined
        onClick={toggleIsPassword}
        style={{ minWidth: '15px', display: 'flex' }}
      />
    ) : (
      <EyeInvisibleOutlined
        onClick={toggleIsPassword}
        style={{ minWidth: '15px', display: 'flex' }}
      />
    )}
  </>
);

TogglePassIcon.propTypes = {
  isPassword: PropTypes.bool.isRequired,
  toggleIsPassword: PropTypes.func.isRequired,
};
export default TogglePassIcon;
