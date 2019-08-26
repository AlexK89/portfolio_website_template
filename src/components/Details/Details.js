import React from 'react'
import './Details.scss'

const Details = (props) => {
    const { details } = props
    return (
        <div className="container about_section">
            <h3 className="section_title">{details.title}</h3>
            <div className="about_details">
                <div className="about_details__photo">
                    <img src={require(`../../images/${details.img.url}`)} alt={details.img.alt} />
                </div>
                <div className="about_details__copy">
                    <p>{details.copy}</p>
                </div>
            </div>
        </div>
    )
}

export default Details

Details.defaultProps = {
    "details": {
        "title": "About me",
        "img": {
            "url": "",
            "alt": ""
        },
        "copy": "Test"
    }
}