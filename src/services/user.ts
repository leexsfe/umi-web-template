/**
* @description: 用户相关
* @author Mr.Lee
* @LastEditors Mr.Lee
* @LastEditTime 2020-12-24 16:08:57
**/
/**
* @description: 用户相关接口
* @author Mr.Lee
* @LastEditors Mr.Lee
* @LastEditTime 2021-01-14 21:04:13
**/
import { useModel } from 'umi';
import { UserApi } from '@/constant/apis';

export default {
  /**
   * 用户登录
   */
  async login(data: any) {
    // const { setInitialState } = useModel('@@initialState');
    // todo
    return true;
  },
  /**
   * 用户登录
   */
  async loginOut() {
    // todo
    return true;
  },
  /**
   * 获取用户信息
   */
  async getUser() {
    // const { }
    return { 
      name: 'lee',
      age: 18
    };
  },
  /**
   * 修改用户信息
   */
  async updateUser() {
    // todo
    return true;
  }
};