import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Button } from 'reactstrap';

import Logo from './assets/images/logo.png';

class Navigasi extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
      <Navbar color="light" light expand="md" className="border py-2 sticky-top">
        <NavbarBrand href="/">
          <img src={Logo} height="50" class="d-inline-block align-center pr-2" alt="Santren Koding" /> Santren Koding
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Kajian Koding</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Santren Kilat</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Mondok</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Tentang Kami</NavLink>
            </NavItem>
            <NavItem>
              <Button outline color="primary">Login/Signup</Button>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      </div>
    );
  }
}

export default Navigasi;