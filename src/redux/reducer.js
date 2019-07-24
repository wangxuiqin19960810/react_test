/* 
真正管理状态数据的reducer函数
*/
import { combineReducers } from 'redux'
import action from './actions'
import storageUtils from "../utils/storageUtils";
import {
    SET_HEADER_TITLE,
    RECEIVE_USER,
    SHOW_MSG
} from './action-types'
/* 
管理头部标题的reducer函数
*/
const initHeaderTitle = '首页'
const headerTitle = (state = initHeaderTitle, action) => {
    switch (action.type) {
        case SET_HEADER_TITLE:
            return action.data
        default:
            return state
    }
}

/* 
管理用户登录的reducer函数
*/
const initUser = storageUtils.getUser() //读取localstorage中保存的user作为初始值
const user = (state = initUser, action) => {
    switch (action.type) {
        case RECEIVE_USER:
            return action.user
        case SHOW_MSG:
        //不要直接修改状态数据内部数据
        /* state.errMsg = action.errMsg
        return state */
            return {...state,errMsg:action.errMsg}//返回一个需要的新的数据
        default:
            return state
    }
}

/* 
combineReducers()返回的是一个新的reducer函数（总reducer函数）
总的state的结构：
{
    headerTitle:headerTitle(),
    user:user()
}
*/
const reducer = combineReducers({//每个子reducer函数都是我对象的属性值 ，每个子reducer函数都指定了一个标识名称
    headerTitle,
    user
})
export default reducer
