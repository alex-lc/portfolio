import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import { NavContainer, Nav } from '../styles';

export default function Header() {
    return (
        <NavContainer>
            <Nav>
                <NavLink exact activeClassName="active" to="/">Home</NavLink>
                <NavLink activeClassName="active" to="/skills">Skills</NavLink>
                <NavLink activeClassName="active" to="/projects">Projects</NavLink>
                <NavLink activeClassName="active" to="/resume">Resume</NavLink>
                <NavLink activeClassName="active" to="/about">About</NavLink>
            </Nav>
        </NavContainer>
    )
}
