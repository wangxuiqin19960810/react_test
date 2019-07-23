import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import store from './redux/store'
import {Provider} from 'react-redux'

//给<APP/>传递一个store，目的是为了APP组件能够用store,然后去读数据更新数据
ReactDOM.render((
    /*redux将store对象提供给Provider, Provider会将接收到store对象提供给所有的容器组件 */
    <Provider store={store}>
        <App />
    </Provider>
), document.getElementById('root'));

  