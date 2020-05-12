import React, { ReactElement } from 'react'
import MovieHeader from "@/components/movieHeader"
import MovieContent from "@/components/movieContent"
import MoviePager from "@/components/pager"

interface Props {
    
}

export default function index({}: Props): ReactElement {
    return (
        <div>
           <MovieHeader></MovieHeader> 
           <MovieContent></MovieContent>
           <MoviePager></MoviePager>
        </div>
    )
}
