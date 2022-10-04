import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, Offcanvas } from 'react-bootstrap';
// import CartWidget from '../CartWidget/CartWidget';
import Brand from '../Brand/Brand';
import CartWidget from '../CartWidget/CartWidget';
import MenuList from '../MenuList/MenuList';
import './NavBar.css'
// import Counter from '../Counter/Counter';

const NavBar = ({opciones}) => {
    return (
        <>
            <Navbar className='navBar' bg="dark" expand={false}>
                <Container fluid>
                    <Navbar.Brand href="#" className='text-white fw-bold fst-italic'><Brand img="../../img/icono.png" title= "ChupiHouse" /></Navbar.Brand>
                    <Nav style={{flexDirection: "row"}} className="d-flex">
                        <ul className='d-flex m-0' >
                            {opciones.map((op, i) => <MenuList key={i} categoria = {op.categoria} />)}
                        </ul>
                    </Nav>
                    <Navbar.Toggle className='shadow-none border-0' aria-controls="offcanvasNavbar" ><span style={{color:"#fff"}}> <CartWidget/> </span></Navbar.Toggle>
                    <Navbar.Offcanvas
                        className="bg-white"
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel">Carrito</Offcanvas.Title>
                        </Offcanvas.Header>
                            <hr className='w-75 m-auto' />
                            <p className='mt-3 mx-3' >Agregá lo que quieras al carrito!</p>
                        <Offcanvas.Body>
                            body
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    );
}
export default NavBar; 