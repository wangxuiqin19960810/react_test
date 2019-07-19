/*
    包含应用中所有请求接口的函数: 接口请求函数
    函数的返回值都是promise对象
*/
import ajax from './ajax';
import jsonp from 'jsonp';
import { message } from 'antd';

// const BASE = 'http://localhost:3000'
const BASE = '';
//发送一个post请求,请求登陆  //写成小括号(=>)才有return的作用  //axios当成对象使用发送post请求
export const reqLogin = (username, password) => ajax.post(BASE + '/login', { username, password });



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

//发送jsonp请求获取天气信息  //jsonp(url, opts, fn)//opts为配置对象
export const reqWeather = (city) => {
    //执行器函数，内部执行异步任务，成功了调用resolve(),失败了直接提示错误信息
    return new Promise((resolve, reject) => {
        const url = `http://api.map.baidu.com/telematics/v3/weather?location=${city}&output=json&ak=3p49MVra6urFRGOT9s8UBWr2`
        jsonp(url, {}, (err, data) => {
            if (!err & data.error === 0) {
                //得到天气的信息
                const { dayPictureUrl, weather } = data.results[0].weather_data[0];
                resolve({ dayPictureUrl, weather })
            } else {
                message.error('获取天气信息失败')
            }
        })
    })
}

//发送请求获取更新列表
//一定要访问localhot:3000，代理才能帮我们转到5000
export const reqCategroys = () => ajax.get(BASE + 'manage/category/list');


//添加分类
export const reqCategroysAdd = (categoryName) => ajax.post(BASE + 'manage/category/add', { categoryName });

//修改分类
export const reqcategroysUpdate = ({categoryId,categoryName}) => ajax.post(BASE + 'manage/category/update', {categoryId, categoryName });

//获取商品分页列表
export const reqProdocts = (pageNum,pageSize)=>ajax(BASE + '/manage/product/list',
{params:{//包含所有query参数的对象
    pageNum,
    pageSize 
}})


