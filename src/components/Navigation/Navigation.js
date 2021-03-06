import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom'
import { URL } from '../../helpers/static'
import './Navigation.scss';

const Navigation = props => {
    const [scrolled, setscrolled] = useState('')

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setscrolled(window.scrollY > 70 ? 'scrolled' : '')
        })
    }, [])
    
    const { details } = props
    
    return (
        <nav className={`nav ${scrolled}`}>
            <p className="logo_wrapper"><Link to={URL}>{details.brand}</Link></p>
            <ul className="nav_list">
                <li className="nav_list__item">
                    <NavLink exact activeClassName="selected" to={URL}>About</NavLink>
                </li>
                <li className="nav_list__item">
                    <NavLink exact activeClassName="selected" to={`${URL}/portfolio`}>Portfolio</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;
