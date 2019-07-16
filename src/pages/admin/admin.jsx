import React,{Component} from 'react';
import {Redirect} from 'react-router-dom';

import memoryutils from '../../utils/memoryutils'
export default class Admin extends Component{
    render(){
        //读取user，如果不存在，直接跳转到登录界面
        // const user= JSON.parse(localStorage.getItem('user_key') || '{}');//将JSON格式的字符串转换成对象
        // const user = storageUtils.getUser()
        const user = memoryutils.user

        if(!user._id){//说明没有登录
            //跳转到登录界面
            // this.props.history.replace('/login')事件;回调函数中路由的跳转
            return <Redirect to={'/login'}/> //render()渲染时自动跳转到指定的路由组件
        }
        return(
            <div>
                hello,{user.username}
            </div>
            
        )
    }
}