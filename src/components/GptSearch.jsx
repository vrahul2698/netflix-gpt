import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BACKGROUND } from '../utils/constants'

const GptSearch = () => {
  return (
    <div>

      {/* 
      GPT search Bar
      GPT movie Suggestions 
      */}
      <div className="fixed -z-10">
        <img
          src={BACKGROUND}
          alt="background"
        />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  )
}

export default GptSearch