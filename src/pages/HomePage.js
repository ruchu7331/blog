import React, { Component } from 'react'
import LayOut from '../components/LayOut'
export default class HomePage extends Component {
  render() {
    return (
      <div>
        {/* <h3>HomePage</h3> */}
        <LayOut showTopBar={false} showBottomBar={true} title='用户中心'>
          {{
            content:(
              <div>
                <h3>这是content</h3>
              </div>
            ),
            txt:'这是个文本',
            btnClick:()=>{console.log(1111111)}
          }}
        </LayOut>
      </div>
    )
  }
}
