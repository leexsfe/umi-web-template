/**
* @description: 系统菜单
* @author Mr.Lee
* @LastEditors Mr.Lee
* @LastEditTime 2020-12-28 11:20:26
**/
import React from 'react';
import { Menu } from 'antd';
import { UserOutlined, CaretUpOutlined } from '@ant-design/icons';

const MenuComponent: React.FC = React.memo(() => {
  return (
    <Menu
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      theme="dark"
      expandIcon={<CaretUpOutlined />}
    >
      <Menu.Item key="1" icon={<UserOutlined />}>
        Option 1
      </Menu.Item>
      <Menu.Item key="2" icon={<UserOutlined />}>
        Option 2
      </Menu.Item>
      <Menu.Item key="3" icon={<UserOutlined />}>
        Option 3
      </Menu.Item>
      <Menu.SubMenu key="sub1" icon={<UserOutlined />} title="Navigation One">
        <Menu.Item key="5">Option 5</Menu.Item>
        <Menu.Item key="6">Option 6</Menu.Item>
        <Menu.Item key="7">Option 7</Menu.Item>
        <Menu.Item key="8">Option 8</Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu key="sub2" icon={<UserOutlined />} title="Navigation Two">
        <Menu.Item key="9">Option 9</Menu.Item>
        <Menu.Item key="10">Option 10</Menu.Item>
        <Menu.SubMenu key="sub3" title="Submenu">
          <Menu.Item key="11">Option 11</Menu.Item>
          <Menu.Item key="12">Option 12</Menu.Item>
        </Menu.SubMenu>
      </Menu.SubMenu>
    </Menu>
  );
});

MenuComponent.defaultProps = {
  collapsed: false
};

export default MenuComponent;