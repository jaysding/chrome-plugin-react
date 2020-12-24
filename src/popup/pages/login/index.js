import React from 'react'
import { Button, Input } from 'antd'
import logo from './logo.png'
import './index.styl'

function Login(props) {
    const login = () => {
        props.history.push('/home')
    }
    return (
        <div className="P-login">
            <img src={logo} alt="axi" className="logo_58"></img>
            <div className="login-con">
                <div className="input-con">
                    <Input
                        placeholder="请输入螺母"
                        size="large"
                    />
                </div>
                <div className="input-con">
                    <Input.Password
                        placeholder="请输入密码"
                        size="large"
                    />
                </div>
                <Button type="primary" size="large" onClick={login}>登录</Button>
            </div>
        </div>
    )
}
export default Login