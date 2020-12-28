/**
* @description: 用户信息
* @author Mr.Lee
* @LastEditors Mr.Lee
* @LastEditTime 2020-12-24 15:40:10
**/
import { useState, useCallback } from 'react';

export default function useUserModel() {
  const [user, setUser] = useState<any>(null);

  const signin = useCallback(async () => {
    return new Promise((resolve: any) => {
      setTimeout(() => setUser({name: 'lee', age: 18}));
    });
  }, []);

  const signout = useCallback(() => {
    // signout implementation
    // setUser(null)
  }, []);

  return {
    user,
    signin,
    signout
  }
}