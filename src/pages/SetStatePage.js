import React, { Component } from 'react'

export default class SetStatePage extends Component {
  constructor(props){
    super(props)
    this.state = {
      counter:0
    }
  }

  componentDidMount(){
    document.getElementById('test').addEventListener('click',this.setCounter)
    // this.changeValue(1)
  }

  changeValue = v =>{
    // setState在合成事件和生命周期中是异步的，这里说的异步其实是批量更新，达到了优化性能的目的
   
    // this.setState({
    //   counter:this.state.counter + v
    // },()=>{
    //   console.log('counter',this.state.counter)
    // })
   
    // console.log('counter',this.state.counter)
  
    // 特殊处理为了链式更新
    this.setState(state=>({counter:state.counter + v}))
  }

  setCounter = () =>{
    // setState在setTimeout和原生事件中是同步的
    // setTimeout(() => {
      // 注意setState的改变如何不特殊处理，则会合并改变，且以最后一个
      this.changeValue(1)
      this.changeValue(2)
      this.changeValue(3)
    // }, 0);
  }

  render() {
    return (
      <div>
        <h3>SetStatePage</h3>
        <button onClick={this.setCounter}>{this.state.counter}</button>
        <button id='test'>{this.state.counter}</button>
      </div>
    )
  }
}
