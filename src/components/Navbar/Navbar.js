import React, { useState } from 'react';
import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { NavBarLogo } from './StyledNavbar';
import CssNavbar from './CssNavbar.css';

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="navbar-css" light expand="md">
      <Container>
        <NavbarBrand href="/">
          <NavBarLogo src={'https://alfredorafael.com/wp-content/uploads/2019/02/myLogo.png'}/></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
          
          <Link to="/exploratory">
           <NavItem className="nav-link">
              Component
            </NavItem> 
          </Link>

           {/* 
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>   
            </NavItem> 
          */}
          
           <UncontrolledDropdown nav inNavbar> 
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
              <Link to="/countries">
                <DropdownItem>
                  Fetching
                </DropdownItem>
              </Link>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
        </Container>

      </Navbar>
    </div>
  );
}

export default Example;