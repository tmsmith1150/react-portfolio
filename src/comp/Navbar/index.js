import React, { useState } from 'react';
import './style.css';
import {
  Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink
} from 'reactstrap';


const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
      <div className="nav">
      <Navbar className="nav sticky-top" light expand="md">

        <NavbarBrand className="ml-3"></NavbarBrand>
        <NavbarToggler onClick={toggle}/>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto navLinks">
            <NavItem>
              <NavLink href="/" className="links">
                About Me
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/projects" className="links">
                Projects
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact" className="links">
                Contact
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      </div>
  );
}

export default Navigation;