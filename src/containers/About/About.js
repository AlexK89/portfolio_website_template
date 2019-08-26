import React from 'react'
import { Link } from 'react-router-dom'
import { URL } from '../../helpers/static'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import Details from '../../components/Details/Details'
import Contacts from '../../components/Contacts/Contacts'
import './About.scss'

const About = props => {
    const { about, projects } = props
    const slicedProjects = projects && Object.values(projects).slice(0, 5)

    return (
        <div className="page_load about_page">
            < div className="container landing_section" >
                <h1>UI / UX Designer</h1>
                <h4>Based in London</h4>
            </div >
            {
                slicedProjects &&
                <div className="container about_projects">
                    <h3 className="section_title">My work</h3>
                    <ul className="about_projects__list">
                        {slicedProjects.map(project => <ProjectCard key={project.projectId} project={project} />)}
                    </ul>
                    <div className="portfolio_more"><Link to={`${URL}/portfolio`} className="btn btn--md"><span>More</span></Link></div>
                </div>
            }
            <Details details={about.details} />
            <Contacts contacts={about.contacts} />
        </div >
    )
}

export default About;