
/* 
包含多个用于创建action对象的工厂函数
*/
/* 
创建增加的action 
同步action
*/
import {INCREMENT,DECREMENT} from './action-types'

export const increment = (number)=>({type:INCREMENT,number})

/* 
创建减少的action 
同步action
*/
export const decrement = (number)=>({type:DECREMENT,number})

/* 
创建一个异步增加的action
异步action是一个函数，参数是dispatch函数
分发异步action是为了有机会执行异步代码
    1.执行异步代码
    2.有了结果后，分发同步action
 */

export const incrementAsync = (number)
    return (dispatch)=>{
        //执行异步代码
        setTimeout(() => {
            //有了结果以后，分发同步action
            dispatch(incrementAsync(number))
        }, 1000);

        
    }
)