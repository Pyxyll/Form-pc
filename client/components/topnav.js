import Link from 'next/link';
import { Navbar, Nav } from 'react-bootstrap';

const TopNav = () => (
  <div>
    <Navbar bg='dark' variant='dark'>
      <Link href='/' passHref>
        <Navbar.Brand href='/'>
          <img
            alt=''
            src='../static/logo.png'
            width='200'
            height='80'
            className='d-inline-block align-top'
          />{' '}
        </Navbar.Brand>
      </Link>

      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse className='justify-content-end'>
        <Nav className='mr-auto'>
          <Link href='/about' passHref>
            <Nav.Link>About</Nav.Link>
          </Link>
          <Link href='/components' passHref>
            <Nav.Link>Components</Nav.Link>
          </Link>
          <Link href='/faq' passHref>
            <Nav.Link>FAQ</Nav.Link>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
);

export default TopNav;
