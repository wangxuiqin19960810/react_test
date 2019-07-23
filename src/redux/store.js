/* 
redux最核心的管理对象
*/
import {createStore,applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import reducer from './reducer'

//暴露一个store对象
export default createStore(reducer,composeWithDevTools(applyMiddleware(thunk)))