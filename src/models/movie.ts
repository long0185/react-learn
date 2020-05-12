import {Effect,Reducer,Subscription,} from 'umi'
import {ConnectState} from "./connect"
export interface movieModelState{
    data:[],
    condition:{
        key:string,
        sex:number,
        limit:number,
        page:number
    },
    total:number
}
export interface movieModelType{
    namespace:"movies",
    state:movieModelState,
    effects:{
        fetchMovies:Effect
    },
    reducers:{
        setMovies:Reducer<movieModelState>
    },
    subscriptions: { 
        setup: Subscription 
    };
}
const movieModel:movieModelType={
    namespace:"movies",
    state:{
        data:[],
        condition:{
            key:"",
            limit:5,
            page:1,
            sex:-1
        },
        total:0
    },
    reducers:{
        setMovies(state,action){
            return Object.assign({},state,action.payload)
        }
    },
    effects:{
        *fetchMovies({payload},{call,select,put}){
            const condition = yield select((state:ConnectState)=>state.movies.condition)
            

        }
    },
    subscriptions:{
        setup({dispatch,history}){
            
        }
    }

}
export default movieModel
