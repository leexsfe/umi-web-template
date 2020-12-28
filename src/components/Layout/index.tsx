/**
* @description: 布局相关
* @author Mr.Lee
* @LastEditors Mr.Lee
* @LastEditTime 2020-12-24 15:50:52
**/
import './index.less';
import React from 'react';
import Logo from './Logo';
import Menu from './Menu';
import Tool from './Tool';
import zhCN from 'antd/lib/locale/zh_CN';
import { Layout, ConfigProvider } from 'antd';
import { useFullscreen } from '@umijs/hooks';

const LayoutComponent: React.FC = React.memo(props => {
  // 全屏
  const { ref, setFull } = useFullscreen<HTMLDivElement>();

  return (
    <div className="container" ref={ref}>
      <ConfigProvider componentSize="middle"
        locale={zhCN}
      >
        <Layout className="layout">
          <Layout.Header className="header">
            <Logo />
            <Tool onFull={setFull} />
          </Layout.Header>
          <Layout>
            <Layout.Sider collapsible>
              <Menu />
            </Layout.Sider>
            <Layout.Content className="content">{props.children}</Layout.Content>
          </Layout>
        </Layout>
      </ConfigProvider>
    </div>
  );
});

export default LayoutComponent;