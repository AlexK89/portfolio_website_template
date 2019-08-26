import React from 'react'
import { Link } from 'react-router-dom'
import './Contacts.scss'

const Contacts = (props) => {
    const { contacts } = props
    const { socials } = contacts

    return (
        <div className="container contacts">
            <h3 className="section_title">{contacts.title}</h3>
            <p className="email"><span>{contacts.email}</span></p>
            <ul className="socials">
                {
                    socials.map((social, index) => {
                        return <li key={index} className="socials_item">
                            <Link to={social.url}>
                                <img src={require(`../../images/socials/${social.icon}`)}
                                    alt={social.title} />
                            </Link>
                        </li>
                    })
                }
            </ul>
            <Link to="/" target="_blank" className="cv_link">Download my CV</Link>
        </div>
    )
}

export default Contacts

Contacts.defaultProps = {
    "contacts": {
        "title": "Contact me",
        "email": "kristinakozhushko3@gmail.com",
        "socials": [
            {
                "title": "linkedin",
                "icon": "linkedin.png",
                "url": "#"
            },
            {
                "title": "twitter",
                "icon": "twitter.png",
                "url": "#"
            },
            {
                "title": "behance",
                "icon": "behance.png",
                "url": "#"
            },
            {
                "title": "dribble",
                "icon": "dribble.png",
                "url": "#"
            }
        ]
    }
}