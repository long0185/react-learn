import axios from "axios"
import Query from "query-string"
export interface IMovie {
    _id?: number,
    types: string,
    areas: string,
    timeLong: number,
    isClassic: boolean,
    isHot: boolean,
    poster?: string,
    name: string,
    description?: string,
    isComing?: boolean
}
type MovieType = {
    [P in keyof IMovie]?: IMovie[P]
}
export  type Condition = {
    key?:string,
    limit?:number,
    page?:number
}
export class MovieService {
    public static async add(movie: IMovie) {
        const { data } = await axios.post("/api/movie", movie)
        return data
    }
    public static async edit(id: number, obj: MovieType) {
        const { data } = await axios.put("/api/movie/" + id, obj)
        return data
    }
    public static async delete(id: number) {
        const { data } = await axios.delete("/api/movie/" + id)
        return data
    }
    public static async searchByCondition(condition:Condition){
        const query = Query.stringify(condition)
        const { data } = await axios.get("/api/movie?" + query)
        return data
    }
    public static async findOne(id:number){
        const {data} = await axios.get("/api/movie/"+id)
        return data
    }

}