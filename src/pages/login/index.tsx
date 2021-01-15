/**
* @description: 用户登录
* @author Mr.Lee
* @LastEditors Mr.Lee
* @LastEditTime 2021-01-14 20:16:58
**/
import React, { useCallback } from 'react';
import { history, useModel } from 'umi';
import { Form, Input, Row, Col, Checkbox, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import UserService from '@/services/user';

// 校验规则
const rules = {
  userName: [
    {required: true, message: ''}
  ],
  password: [
    {required: true, message: ''}
  ]
};

const LoginPage: React.FC = React.memo(() => {
  /**
   * 提交表单
   * @param values 登录表单数据
   */
  const handleSubmit = useCallback((values: any) => {
    UserService.login(values).then((success: Boolean) => {
      // 登录成功，跳转后台首页
      success && history.push('/');
    });
  }, []);

  return (
    <div className="login-page">
      <h1>用户登录</h1>
      <Form name="login_form" className="login-form" onFinish={handleSubmit} >
        <Form.Item name="userName" rules={rules.userName} >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="账户" />
        </Form.Item>
        <Form.Item name="password" rules={rules.password} >
          <Input.Password placeholder="Password"
            prefix={<LockOutlined className="site-form-item-icon" />}
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>记住我</Checkbox>
          </Form.Item>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-button">登录</Button>
        </Form.Item>
      </Form>
    </div>
  );
});
export default LoginPage;