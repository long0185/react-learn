import {Effect,Reducer,history} from 'umi'
import {LoginUserInfoState} from "./connect.d"
export interface LoginModelState  {
    user:LoginUserInfoState
}
export interface LoginModelType{
    namespace:"login",
    state:LoginModelState,
    effects: {
        login: Effect;
        loginOut:Effect
      };
     reducers:{
        setLoginUser: Reducer<LoginModelState>
     }, 
}
const loginModel:LoginModelType = {
    namespace:"login",
    state:{
        user:null
    },
    reducers:{
       setLoginUser(state,{payload}){
           return {
               user:payload
           }
       }
    },
    effects:{
        *login({payload},{call,put,select}){
            const {loginId,loginPwd} = payload
            if(loginId=='admin' && loginPwd=="123456"){
                yield put({type:"setLoginUser",payload:loginId})
                localStorage.setItem("loginId",loginId)
                history.push("/")
            }else{
                window.alert("帐号密码不正确")
            }
        },
        *loginOut({payload},{put}){
            yield put({type:"setLoginUser",payload:null})
            localStorage.removeItem("loginId")
            history.push("/login")
        }
    }
}
export default loginModel