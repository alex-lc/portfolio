import React from "react";
import { NavLink, Link } from "react-router-dom";

import { NavContainer, Nav } from "../styles";

// assets
import Resume from "../assets/files/alexander-cooter-resume-2021.pdf";

export default function Header() {
  return (
    <NavContainer>
      <Nav>
        <NavLink exact activeClassName="active" to="/">
          Home
        </NavLink>
        <NavLink activeClassName="active" to="/skills">
          Skills
        </NavLink>
        <NavLink activeClassName="active" to="/projects">
          Projects
        </NavLink>
        <Link to={Resume} target="_blank" download>
          Resume
        </Link>
      </Nav>
    </NavContainer>
  );
}
