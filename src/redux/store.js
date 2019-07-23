/* 
redux最核心的管理对象
*/
import {createStore,applyMiddleware} from 'redux'
import thunk from 'react-redux'
import {reducer} from './reducer'

//暴露一个store对象
export default createStore(reducer,applyMiddleware(thunk))