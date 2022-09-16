import {
    Collapse,Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
  } from 'reactstrap';
  import { NavLink as ReactLink } from 'react-router-dom';
const CustomNav =()=>{
    return(
        <div>
        <Navbar color='dark' dark expand="md" fixed=''>
          <NavbarBrand >Farmer's Crop Insurance</NavbarBrand>
          <NavbarToggler onClick={function noRefCheck(){}} />
          <Collapse navbar>
            <Nav className="me-auto" navbar>
              <NavItem>
                <NavLink tag={ReactLink} to="/">Login</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={ReactLink} to="/Signup">
                  SignUp
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={ReactLink} to="/About">
                  About us
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret >
                  Contact us
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>sonparatenayan@gmail.com</DropdownItem>
                  <DropdownItem>nahushmore@gmail.com</DropdownItem>
                 
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
            {/* <NavbarText>
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                Contact us
                </DropdownToggle>
                <DropdownMenu left>
                  <DropdownItem>sonparatenayan@gmail.com</DropdownItem>
                  <DropdownItem>nahushmore@gmail.com</DropdownItem>
                  {/* <DropdownItem divider />
                  <DropdownItem>Reset</DropdownItem> }
                </DropdownMenu>
              </UncontrolledDropdown>
              </NavbarText> */}
          </Collapse>
        </Navbar>
      </div>
    )

    }
export default CustomNav;
    
