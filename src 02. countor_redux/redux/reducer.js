import {INCREMENT,DECREMENT} from './action-types'
/* 
真正管理状态数据的函数 (回调函数，我们定义，但我们不调用 )
作用：根据老的state和action,产生新的state
state是现有的，action是我们我们指定的
action是我在组件中指定，最终传给reducer函数，reducer函数的命名见名知意 
reducer函数会根据action来做处理,action必有一个type属性

reducer函数的返回值是多少，state的返回值就是多少
*/

export default function count(state = 1, action) {//为state指定一个初始值1
    console.log('count()', state, action)
    switch (action.type) {
        case INCREMENT:
            return state + action.number
        case DECREMENT:
            return state - action.number
        default:
            return state//产生初始状态值
    }
}