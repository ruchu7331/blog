import React, { Component } from 'react'
import {connect} from 'react-redux'
export default connect(
  state =>({num:state}),
  {
    add: ()=>({type:'ADD'}),
    minus: ()=>({type:'MINUS'}),
  }
)(class ReactReduxPage extends Component {
  render() {
    console.log(this.props)
    const {num, dispatch ,add ,minus} = this.props
    return (
      <div>
        <h3>ReactReduxPage</h3>
        <p>{num}</p>
        {/* <button onClick={()=>dispatch({type:'ADD'})}>add</button> */}
        <button onClick={add}>add</button>
        <button onClick={minus}>minus</button>
      </div>
    )
  }
})
