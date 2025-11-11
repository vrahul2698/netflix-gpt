import React from 'react'
import { IMAGE_CDN } from '../utils/constants'

const MovieCard = ({ posterPath }) => {
    if (!posterPath) return null
    return (
        <div className='w-36 md:w-48 p-4'>
            <img src={IMAGE_CDN + posterPath} alt='Movie Poster' />
        </div>
    )
}

export default MovieCard