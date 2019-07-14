import React, { Component } from 'react';
import { Form, Icon, Input, Button } from 'antd';
import logo from './images/logo.png';
import bg from './images/bg.jpg';
import './login.less'
export default class Login extends Component {
    handleSubmit = e => {
        e.preventDefault();//组织事件的默认行为，阻止表单的提交
        alert('发送ajax验证');
      };
    render() {
        const Item = Form.Item;
        return (
            <div className="login" src={bg} alt={"资源记载失败"}>
                <header className="login-header">
                    <img src={logo} alt={"资源记载失败"} />
                    <h1>后台管理系统</h1>
                </header>
                <section className="login-content">
                    <h1>用户登录</h1>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Item>
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="用户名"
                            />
                        </Item>
                        <Item>
                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="密码"
                            />
                        </Item>
                        <Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                登 录
                            </Button>
                        </Item>
                    </Form>

                </section>
            </div>

        )
    }
}