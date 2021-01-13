import store from '../store/index'
import React, { Component } from 'react'

export default class StorePage extends Component {
  // componentDidMount(){
  //   store.subscribe(()=>{
  //     this.forceUpdate()
  //   })
  // }
  add=() =>{
    store.dispatch({type:'ADD'})
  }
  minus=() =>{
    store.dispatch({type:'MINUS'})
  }
  render() {
    return (
      <div>
          {store.getState()}
          <button onClick={this.add}>ADD</button>
          <button onClick={this.minus}>MINUS</button>
      </div>
    )
  }
}
