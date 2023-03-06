import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {SiApacherocketmq} from "react-icons/si"
import AddCard from '../add-card/AddCard';
import { NavLink } from 'react-router-dom';
import css from "./NavBar.module.scss"
function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="black" variant="dark">
      <Container>
        <Navbar.Brand href="/"><SiApacherocketmq/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink className={css.title} to="/">SuperHeros</NavLink>
            <NavLink className={css.title} to="/favorites">Favorites</NavLink> 
            <AddCard/>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;