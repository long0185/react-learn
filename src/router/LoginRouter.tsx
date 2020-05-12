import { connect, history, Dispatch } from "umi"
import {ConnectState} from "@/models/connect"
function LoginRouter(props:any) {
    console.log(props)
    if (props.loginId) {
        return props.children
    } else {
       history.push("/login")
        return null
    }
}
const mapStateToProps = (state:ConnectState) =>({
            loginId:state.login.user
})
export default connect(mapStateToProps)(LoginRouter)
