/* 
真正管理状态数据的reducer函数
*/
import {combineReducers} from 'redux'
import action from './actions'
import { storageUtils } from "../utils/storageUtils";

/* 
管理头部标题的reducer函数
*/
const initHeaderTitle = '首页'
const headerTitle = (state = initHeaderTitle,action)=>{
    switch (action.type) {
        // case value:
            
        //    return
     
        default:
            return state
    }
}

/* 
管理用户登录的reducer函数
*/
const initUser = storageUtils.getUser() //读取localstorage中保存的user作为初始值
const user = (state = initUser,action)=>{
    switch (action.type) {
        // case value:
            
        //    return
    
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
