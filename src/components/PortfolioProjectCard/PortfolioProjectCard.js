import React from 'react'
import { Link } from 'react-router-dom'
import { URL } from '../../helpers/static'
import './PortfolioProjectCard.scss'


const PortfolioProjectCard = (props) => {
    const { project } = props
    return (
        <li className="portfolio_project_card__item">
            <div className="main_image">
                <img
                    src={require(`../../images/${project.projectId}/${project.mainImg}`)}
                    alt="main project" />
            </div>
            <div className="description">
                <h3 className="title">{project.title}</h3>
                <h6 className="subtitle">{project.subtitle}</h6>
                <div className="details">
                    <h4>About</h4>
                    <p>{project.description}</p>
                </div>
                <div className="more"><Link className="btn btn--sm" to={`${URL}/portfolio/project/${project.projectId}`}><span>More</span></Link></div>
            </div>
        </li>
    )
}

export default PortfolioProjectCard;

PortfolioProjectCard.defaultProps = {
    project: {
        "projectId": "project_1",
        "title": "Project 1",
        "subtitle": "UI/UX",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        "mainImg": "main.jpg",
        "images": [
            "/",
            "/"
        ],
        "copy": [
            "Text 1",
            "Text 2",
            "Text 3"
        ]
    }
}
