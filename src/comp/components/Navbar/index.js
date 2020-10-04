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
      <Navbar className="nav" light expand="md" className="sticky-top">

        <NavbarBrand className="ml-3"></NavbarBrand>
        <NavbarToggler onClick={toggle}/>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto"  className="navLinks">
            <NavItem>
              <NavLink href="/">
                About Me
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/projects">
                Projects
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact">
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