import React from 'react'
import { Link } from 'react-router-dom'
import { URL } from '../../helpers/static'
import './ProjectCard.scss'

const ProjectCard = (props) => {
    const { project } = props
    return (
        <li className="project_card__item">
            <Link to={`${URL}/portfolio/project/${project.projectId}`}>
                <img
                    src={require(`../../images/${project.projectId}/${project.mainImg}`)}
                    alt="main project" />
                <div className="item_details">
                    <h6>{project.title}</h6>
                    <p>{project.subtitle}</p>
                </div>
            </Link>
        </li>
    )
}

export default ProjectCard;

ProjectCard.defaultProps = {
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
