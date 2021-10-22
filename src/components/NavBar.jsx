
import React, { useState } from 'react';
import {
  Collapse,
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
import 'bootstrap/dist/css/bootstrap.min.css';
import { FiArrowUpRight} from "react-icons/fi";
import { FiCheckSquare } from "react-icons/fi";
import { BsFillBasket2Fill } from "react-icons/bs";
import { Button } from 'reactstrap';
import { FaBeer } from 'react-icons/fa';

class Question extends React.Component {
  render() {
    return <h3> Lets go for a <FaBeer />? </h3>
  }
}



const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light miNav" light expand="md">
        <NavbarBrand href="#">Mi Ecommerce</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/"> <FiArrowUpRight /> Iniciar sesión</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#"> <FiCheckSquare /> Crear cuenta</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#"><BsFillBasket2Fill /> Carrito</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
        <Button outline color="info">Contacto</Button>{' '}
        
      </Navbar>
      
    </div>
  );
}

export default Example;

