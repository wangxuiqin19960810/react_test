/* 
    redux最核心的管理对象：store
    redux,向外暴露一个createStore函数，函数的返回值是一个store对象
    createStore函数必须要传一个reducer函数 ，因为store对象需要reducer函数
    reducer函数由我们来定义
*/
import {createStore} from 'redux'
import reducer from './reducer.js'


//根据指定的reducer函数产生一个store对象
//store对象内部管理新状态数据，状态数据的初始值为reducer()第一次调用的返回值
const store = createStore(reducer)
export default store