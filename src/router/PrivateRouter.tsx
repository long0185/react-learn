import React from "react"
import { NavLink } from "umi"
import login from '@/pages/login';
export default (props: any) => {
    const loginId = localStorage.getItem("loginId");
    if (loginId) {
        return <div>{props.children}</div>;
    } else {

        return (<h1>该页面需要登录才能访问，请登录<NavLink to="/login">去登录</NavLink></h1>)
    }
}