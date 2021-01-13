import React, { Component } from 'react'
import { Menu } from 'antd';
import './index.less'
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
const { SubMenu } = Menu;
const urlList = [{
  icon: <UserOutlined />, link: '/user', title: '用户中心',
  children: [{
    icon: <VideoCameraOutlined />, link: '/user/list', title: '个人列表',
  }, {
    icon: <UploadOutlined />, link: '/user/index', title: '个人中心',
  },]
},]

export default class App extends Component {
  render() {
    return (
      <Menu
        mode="inline"
      >
        {
          urlList.map(res => {
            return <SubMenu key={res.link} icon={res.icon} title={res.title}>
              {
                res.children.map(obj => {
                  return <Menu.Item key={obj.link} icon={obj.icon}>{obj.title}</Menu.Item>
                })
              }
            </SubMenu>
          })
        }
      </Menu>
    )
  }
}

