import React from 'react';
import { Link } from 'react-router-dom';

import { NavContainer, Nav } from '../styles';

export default function Header() {
    return (
        <NavContainer>
            <Nav>
                <Link to="/">Home</Link>
                <Link to="/skills">Skills</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/about">About</Link>
            </Nav>
        </NavContainer>
    )
}
