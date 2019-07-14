import React,{Component} from 'react';
import logo from './images/logo.png';
import bg from './images/bg.jpg';
import './login.less'
export default class Login extends Component{
    render(){
        return(
            <div className="login" src={bg} alt={"资源记载失败"}>
                <header className="login-header">
                    <img src={logo} alt={"资源记载失败"}/>
                    <h1>后台管理系统</h1>
                </header>
                <section className="login-content">
                    <h1>用户登录</h1>
                    <form>表单</form>
                </section>
            </div>
                          
        )
    }
}