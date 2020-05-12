import {LoginModelState} from "./login"
import {movieModelState}from "./movie"
export type LoginUserInfoState =null|string
export interface Route{
    routes?:Route[]
}
export interface ConnectState {
    login: LoginModelState;
    movies:movieModelState
  }
