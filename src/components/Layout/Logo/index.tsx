/**
* @description: Logo
* @author Mr.Lee
* @LastEditors Mr.Lee
* @LastEditTime 2020-12-28 11:06:09
**/
import './index.less';
import React from 'react';
import { Link } from 'umi';
import classnames from 'classnames';
import { GlobalOutlined } from '@ant-design/icons';

const LogoComponent: React.FC = React.memo(props => {
  return (
    <Link className="logo" to="/">
      <GlobalOutlined />
      <h1>名称</h1>
    </Link>
  );
});

export default LogoComponent;