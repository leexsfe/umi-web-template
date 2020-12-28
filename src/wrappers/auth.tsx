/**
* @description: 登录校验
* @author Mr.Lee
* @LastEditors Mr.Lee
* @LastEditTime 2020-12-24 15:35:09
**/
import React from 'react';
import { Redirect, useModel } from 'umi';

export default (props: any) => {
  // 初始数据
  const { initialState } = useModel('@@initialState');
  // 当前登录用户
  const { user } = initialState || {};
  if (user) {
    return <div>{ props.children }</div>;
  } else {
    // 跳转登录
    return <Redirect to="/login" />
  }
}