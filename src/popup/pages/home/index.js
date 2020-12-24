import React from 'react'
import { Button } from 'antd'
// import './home.styl'

function Home(props) {
    const logout = () => {
        props.history.push('/login')
    }
    return (
        <div className="P-home">
            <h1>首页</h1>
            <div className="home-con">
                <Button type="primary" size="large" onClick={logout}>退出登录</Button>
            </div>
        </div>
    )
}
export default Home