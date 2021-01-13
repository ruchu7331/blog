import { Empty } from 'antd'
import React, { Component } from 'react'
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom'
export default class ReactRouterPage extends Component {
  render() {
    return (
      <div>
        <h3>ReactRouterPage</h3>
        <Router>
          <Link to='/'>首页</Link>
          <Link to='/user'>用户中心</Link>
          <Switch>
            <Route 
              exact
              path='/' 
              // children={()=><div>children</div>}  
              component={HomePage}
              // render={()=><div>render</div>} 
              ></Route>
            <Route path='/user' component={UserPage}></Route>
            <Route component={EmptyPage}></Route>
          </Switch>
        </Router>
      </div>
    )
  }
}
// children > component > render (三种渲染方式 互斥模式)
function HomePage() {
  return (
    <h3>HomePage</h3>
  )
}
function UserPage() {
  return (
    <h3>UserPage</h3>
  )
}
function EmptyPage() {
  return(<h3>EmptyPage</h3>)
}