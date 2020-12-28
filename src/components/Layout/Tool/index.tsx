/**
* @description: 操作栏
* @author Mr.Lee
* @LastEditors Mr.Lee
* @LastEditTime 2020-12-28 11:37:42
**/
import './index.less';
import React from 'react';
import { useModel, history, Link} from 'umi';
import { Button, Tooltip, Avatar } from 'antd';
import { clearLoginData } from '@/utils/util';
import { LogoutOutlined, FullscreenOutlined, UserOutlined } from '@ant-design/icons';

interface ToolComponentProps {
  onFull: (e: any) => void
}

/**
 * 退出登录
 */
function loginOut() {
  clearLoginData();
  history.push('/login');
}

const ToolComponent: React.FC<ToolComponentProps> = React.memo(props => {
  // 初始化数据
  const { initialState } = useModel('@@initialState');
  const user: any = initialState?.user || {};
 
  
  if (!user) {
    return null;
  }
  return (
    <div className="header-tool">
      {/*用户信息*/}
      <div className="welcome">
        <Avatar size="small" icon={<UserOutlined />} />
        <span>欢迎您，</span>
        <Link to="/ucenter">{user.name}</Link>
      </div>
      {/*全屏*/}
      <Tooltip placement="bottom" title="全屏">
        <Button type="link" icon={<FullscreenOutlined />} onClick={props.onFull} />
      </Tooltip>
      {/*退出*/}
      <Tooltip placement="bottom" title="退出登录">
        <Button type="link" icon={<LogoutOutlined />} onClick={loginOut} />
      </Tooltip>
    </div>
  );
});

export default ToolComponent;