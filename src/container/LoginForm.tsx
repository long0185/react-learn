import NormalLoginForm from "@/components/Login"
import React, { ReactElement } from 'react'
import {connect, Dispatch} from 'umi'
import {ConnectState}from '../models/connect'
const mapDispatchToProps = (dispatch:Dispatch)=>({
    onLogin(loginId:string,loginPwd:string){
        dispatch({type:"login/login",payload:{loginId,loginPwd}})
    }
})
export default connect(null,mapDispatchToProps)(NormalLoginForm)