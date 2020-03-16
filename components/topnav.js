import Link from 'next/link';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// import logo from '../img/logo.png';

const TopNav = () => (
  <div>
    <Navbar bg="dark" variant="dark">

      <Link href="/" passHref>
        <Navbar.Brand href="/">
          {/* <img
            alt=""
            src="{logo}"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '} */}
      Form
    </Navbar.Brand>
      </Link>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-end">
        <Nav className="mr-auto">
          <Link href="/about" passHref>
            <Nav.Link>About</Nav.Link>
          </Link>
        </Nav>
      </Navbar.Collapse>

    </Navbar>
  </div>
);

export default TopNav;
