import React from 'react'

import PortfolioProjectCard from '../../components/PortfolioProjectCard/PortfolioProjectCard'
import './Portfolio.scss'

const Portfolio = props => {
    const { portfolio, projects } = props
    const { details } = portfolio ? portfolio : false

    return (
        <div className="page_load portfolio_page">
            <div className="landing_section">
                <div className="landing_section__background">
                    <div className="landing_section__background__rainbow"></div>
                    <div className="img_wrapper">
                        <img src={require(`./../../images/${details.img.url}`)} alt={portfolio.details.img.alt} />
                    </div>
                </div>
                <div className="container landing_section__content">
                    <h1>{details.title}</h1>
                    <h4>{details.subtitle}</h4>
                </div>
            </div>
            <div className="container portfolio">
                <ul className="portfolio__projects_list">
                    {Object.values(projects).map(project => <PortfolioProjectCard key={project.projectId} project={project} />)}
                </ul>
            </div>
        </div>
    )
}

export default Portfolio