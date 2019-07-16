/*
    包含应用中所有请求接口的函数: 接口请求函数
    函数的返回值都是promise对象
*/
import ajax from './ajax';

// const BASE = 'http://localhost:3000'
const BASE = '';
//发送一个post请求,请求登陆  //写成小括号(=>)才有return的作用  //axios当成对象使用发送post请求
export const reqLogin = (username,password) => ajax.post(BASE+'/login',{username,password});
    
    

//当成函数使用发送post请求
    /* ajax({//axios的返回值是一个primose实例对象，将promise实例对象返出去才能.then .catch
        method:'post',
        url: BASE+'/login',
        data:{//用axios发送ajax请求，data是对象时，默认使用json格式的请求体携带参数数据
            username,
            password
        }
    }) */



// export function reqLogin(username,password){
//     return ajax({//axios的返回值是一个primose实例对象，将promise实例对象返出去才能.then .catch
//         method:'post',
//         url: BASE+'/login',
//         data:{//用axios发送ajax请求，data是对象时，默认使用json格式的请求体携带参数数据
//             username,
//             password
//         }
//     })
// }

//将实参数据赋值给形参变量
// const name = 'admin';
// const pwd = 'admin';
// //请求响应，
// reqLogin(name,pwd)
    
//     .then(
//         //成功的回调
//         result=>{//response.data的值
//         // const result = response.data;
//         // console.log('请求成功了', result);
//         message.success('请求成功了')
    
//     },
//         //失败的回调
//         // error=>{
//         //     alert('请求失败了'+ error.message)
//         // })
    
