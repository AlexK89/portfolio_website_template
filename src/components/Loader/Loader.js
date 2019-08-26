import React from 'react'
import './Loader.scss'

export default function Loader() {
    return (
        <div className="loader">
            <div className="loader__indicator"></div>
            <h1>Loading ...</h1>
        </div>
    )
}
