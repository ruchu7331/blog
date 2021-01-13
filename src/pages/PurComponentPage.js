import React, { Component, PureComponent } from 'react'

export default class PurComponentPage extends PureComponent {
  constructor(props){
    super(props)
    this.state = {
      num: 0
    }
  }
  add = ()=> {
   this.setState({
     num: 100
   })
  }

  // shouldComponentUpdate(nextProps,nextState){
  //   console.log(this)
  //   return nextState.num !== this.state.num
  // }

  render() {
    const {count} = this.state
    return (
      <div>
        <h3>PurComponentPage</h3>
        <button onClick={this.add}>{count ||'add'}</button>
      </div>
    )
  }
}
