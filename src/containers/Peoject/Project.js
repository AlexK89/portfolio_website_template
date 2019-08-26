import React, { useState } from 'react'
import Aux from '../../HOC/Aux'
import Popup from '../../components/Popup/Popup'
import './Project.scss'

const Project = props => {
    const [selectedImg, setselectedImg] = useState('')

    const paragraphsList = ({ text }) => {
        return <div className={`section__details`}>
            {text.map((p, i) => <p key={i}>{p}</p>)}
        </div>
    }

    const imagesList = ({ images, projectId, section }) => {
        return <div className={`section__images`}>
            {
                images.map((image, i) => {
                    let images = ''
                    try {
                        images = <div key={i} className={`section__images__image ${image.orientation}`}>
                            <img src={require(`../../images/${projectId}/${section}/${image.url}`)} alt={image.alt} />
                        </div>
                    }
                    catch (err) {
                        console.warn('CIH: Image does not exist')
                    }

                    return images
                })
            }
        </div>
    }

    const imageClickHandler = event => {
        event.target.src && setselectedImg({
            url: event.target.src,
            alt: event.target.alt
        })

        document.querySelector('body').classList.add('no_scroll')
    }

    const closePopupHandler = () => {
        setselectedImg(null)
        document.querySelector('body').classList.remove('no_scroll')
    }

    // If server will fail, use default props
    const { projects, projectId } = props
    const projectToRender = projects[projectId] ? projects[projectId] : props[projectId]

    return (
        <Aux>
            {
                <div className="page_load project_page">
                    <div className="container top_banner">
                        <img src={require(`../../images/${projectId}/${projectToRender.mainImg}`)} alt={projectToRender.title} />
                        <div className="top_banner__details">
                            <h1 className="title">{projectToRender.title}</h1>
                            <p className="description">{projectToRender.description}</p>
                        </div>
                    </div>
                    {
                        Object.keys(projectToRender.text).map(section => {
                            const values = projectToRender.text[section]

                            return <div key={section} onClick={imageClickHandler} className={`container section__wrapper`}>
                                <div className={`section ${section}`}>
                                    <h2 className={`section__title`}>{values.title}</h2>
                                    {paragraphsList({ text: values.text })}
                                    {imagesList({ images: values.images, projectId: projectToRender.projectId, section })}
                                </div>
                            </div>
                        })
                    }
                </div>
            }
            {selectedImg && <Popup selectedImg={selectedImg} closePopupHandler={closePopupHandler} />}
        </Aux>
    )
}

export default Project

Project.defaultProps = {
    "projectId": "project_1",
    "project_1": {
        "projectId": "project_1",
        "title": "Can't load data from the server",
        "subtitle": "UI/UX",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        "mainImg": "main.jpg",
        "text": {
            "problem": {
                "title": "Problem",
                "text": [
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
                ],
                "images": [
                    {
                        "url": "1.jpg",
                        "alt": "text",
                        "orientation": "vertical"
                    },
                    {
                        "url": "2.png",
                        "alt": "text",
                        "orientation": "small"
                    },
                    {
                        "url": "2.png",
                        "alt": "text",
                        "orientation": "horizontal"
                    },
                    {
                        "url": "2.png",
                        "alt": "text",
                        "orientation": "small"
                    },
                    {
                        "url": "2.png",
                        "alt": "text",
                        "orientation": "vertical"
                    },
                    {
                        "url": "1.png",
                        "alt": "text",
                        "orientation": "big"
                    },
                    {
                        "url": "2.png",
                        "alt": "text",
                        "orientation": "small"
                    }
                ]
            },
            "solution": {
                "title": "Solution",
                "text": [
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
                ],
                "images": [
                    {
                        "url": "1.jpg",
                        "alt": "text",
                        "orientation": ""
                    },
                    {
                        "url": "2.png",
                        "alt": "text",
                        "orientation": ""
                    }
                ]
            },
            "result": {
                "title": "Result",
                "text": [
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
                ],
                "images": [
                    {
                        "url": "1.jpg",
                        "alt": "text",
                        "orientation": ""
                    },
                    {
                        "url": "2.png",
                        "alt": "text",
                        "orientation": ""
                    }
                ]
            }
        }
    }
}