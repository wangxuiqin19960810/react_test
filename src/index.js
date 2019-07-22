import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/store'

//给<APP/>传递一个store，目的是为了APP组件能够用store,然后去读数据更新数据
ReactDOM.render(<App store={store}/>, document.getElementById('root'));

//绑定监听store内部状态数据改变的监听
store.subscribe(()=>{
    ReactDOM.render(<App store={store}/>, document.getElementById('root')); 
})
  