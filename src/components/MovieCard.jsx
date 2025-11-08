import React from 'react'
import { IMAGE_CDN } from '../utils/constants'

const MovieCard = ({ posterPath }) => {
    return (
        <div className='w-48 p-4'>
            <img src={IMAGE_CDN + posterPath} alt='Movie Poster' />
        </div>
    )
}

export default MovieCard