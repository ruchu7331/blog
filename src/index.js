import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'antd/dist/antd.css';
import store from './store/index'
import {Provider} from 'react-redux'
import './static/fonts/iconfont.css'

ReactDOM.render(
 <Provider store={store}>
  <App/>
 </Provider>,
  document.getElementById('root')
);