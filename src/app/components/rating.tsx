"use client"
import React from 'react'
import ReactStars from 'react-stars'

const StarRating = () => {
    return (
        <ReactStars
            count={5}
            size={24}
            color2={'#ffd700'}
        >
        </ReactStars>
    )
}

export default StarRating