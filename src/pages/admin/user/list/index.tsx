/**
* @description: 用户列表
* @author Mr.Lee
* @LastEditors Mr.Lee
* @LastEditTime 2020-12-24 15:46:56
**/
import './index.less';
import React from 'react';
import { Table } from 'antd';

const columns: Array<any> = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Cash Assets',
    className: 'column-money',
    dataIndex: 'money',
    align: 'right',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    money: '￥300,000.00',
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    money: '￥1,256,000.00',
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    money: '￥120,000.00',
    address: 'Sidney No. 1 Lake Park',
  },
];

const UserList: React.FC = React.memo(() => {
  return (
    <div className="page">
      <Table bordered
        className="page-table"
        columns={columns}
        dataSource={data}
        title={() => 'Header'}
        footer={() => 'Footer'}
      />
    </div>
  );
});

export default UserList;