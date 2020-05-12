import React, { ReactElement } from 'react'
import MovieList from "@/components/movies"
interface Props {
    
}

export default function movielist({}: Props): ReactElement {
    return (
        <div className="movie-list">
           <MovieList></MovieList>
        </div>
    )
}
