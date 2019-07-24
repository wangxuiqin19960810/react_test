
/* 
包含n个用于创建action对象/函数的工厂函数
同步action为对象
异步action为函数
*/
import {
    SET_HEADER_TITLE,
    RECEIVE_USER,
    SHOW_MSG
} from './action-types'
import { reqLogin } from '../api'

//设置头部标题，分发同步action
export const setHeaderTitle = (headerTitle) => ({ type: SET_HEADER_TITLE, data: headerTitle })


//登录成功分发同步action
export const receiveUser = (user) => ({ type: RECEIVE_USER, user })

//登录失败分发同步action
export const showMsg = (errMsg) => ({ type: SHOW_MSG, errMsg })


//登录的异步action
export function login(username, password) {
    return async (dispatch) => {
        //发送登录的异步ajax请求
        const result = await reqLogin(username, password)
        //分发同步action
        if (result.status === 0) {//1.分发成功的同步action
            const user = result.data
            dispatch(receiveUser(user))
        } else {//2.分发失败的同步action
            const msg = result.msg
            dispatch(showMsg(msg))
        }


    }
}

