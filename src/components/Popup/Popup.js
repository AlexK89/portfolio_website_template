import React from 'react'
import './Popup.scss'

const Popup = props => {
    const { selectedImg, closePopupHandler } = props

    const closeHandler = event => {
        console.log(event.target.tagName)
        if (event.target.tagName !== 'IMG') {
            closePopupHandler()
        }
    }

    return (
        <div onClick={closeHandler} className="image_popup">
            <div className="img_wrapper">
                <img src={selectedImg.url} alt={selectedImg.alt} />
            </div>
        </div>
    )
}

export default Popup

Popup.defaultProps = {
    "selectedImg": {
        "url": "",
        "alt": ""
    }
}