// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import {BrowserRouter} from 'react-router-dom'
// import './api';
// ReactDOM.render(
// <BrowserRouter>
// <App/>
// </BrowserRouter>
// , document.getElementById('root'));

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import store from './redux/store'
import App from './App';
import './api';
ReactDOM.render((
    //provider负责将store对象传给所有的容器组件
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
   
), document.getElementById('root'));
