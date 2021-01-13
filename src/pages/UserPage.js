import React, { Component } from 'react'
import LayOut from '../components/LayOut'
export default class UserPage extends Component {
  render() {
    return (
      <div>
       <LayOut showTopBar={true} showBottomBar={true} title='个人'>
        <h3>UserPage</h3>
        </LayOut>
      </div>
    )
  }
}
