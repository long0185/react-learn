import React, { ReactElement } from 'react'
import {NavLink,connect,Dispatch} from "umi"
import {ConnectState} from "../models/connect"

interface Props {
    loginId:string|null,
    onLoginOut():void
}
 function Header(props: Props): ReactElement {
    return (
        <>
            <div className="left"><h2><NavLink to="/">欢迎使用电影管理系统</NavLink></h2></div>
            <div className="right">
                <span>欢迎你,</span>
                <span>{props.loginId}</span>
                <button className="header-btn" onClick={()=>{
                    props.onLoginOut()
                }}>退出登录</button>
            </div>
        </>
    )
}
const mapStateToProps = (state:ConnectState)=>({
    loginId:state.login.user
})
const mapDispatchToProps = (dispach:Dispatch)=>({
    onLoginOut(){
        dispach({type:"login/loginOut"})
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(Header)


