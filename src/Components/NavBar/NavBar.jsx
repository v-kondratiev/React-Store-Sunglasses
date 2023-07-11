import {useSelector} from "react-redux";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom';
import {Nav} from "react-bootstrap";

const NavBar = () => {
    const cartProducts = useSelector(state => state.cart);
    return (

        <Navbar sticky="top" collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand to="/" as={Link}>Redux-Toolkit</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link to="/" as={Link}>Home</Nav.Link>
                        <Nav.Link to="/Items" as={Link}>Product</Nav.Link>
                        <NavDropdown title="About us" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Benefits</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Delivery</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Contacts</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link to="/cart" as={Link}>Cart {cartProducts.length}</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>


        // <div>
        //     {/*<CNavbar expand="lg" colorScheme="light" className="bg-light" placement="sticky-top">*/}
        //     {/*    <CContainer>*/}
        //     {/*        <CNavbarBrand href="/">Redux toolkit</CNavbarBrand>*/}
        //     {/*        <CNavbarToggler onClick={() => setVisible(!visible)}/>*/}
        //     {/*        <CCollapse className="navbar-collapse" visible={visible}>*/}
        //     {/*            <CContainer>*/}
        //     {/*                <CNavbarNav>*/}
        //     {/*                    <CNavItem>*/}
        //     {/*                        <CNavLink href="/" active>Home</CNavLink>*/}
        //     {/*                    </CNavItem>*/}
        //     {/*                    <CNavItem>*/}
        //     {/*                        <CNavLink href="/Items">Products</CNavLink>*/}
        //     {/*                    </CNavItem>*/}
        //     {/*                    <CDropdown variant="nav-item" popper={false}>*/}
        //     {/*                        <CDropdownToggle color="secondary">Dropdown button</CDropdownToggle>*/}
        //     {/*                        <CDropdownMenu>*/}
        //     {/*                            <CDropdownItem href="#">Action</CDropdownItem>*/}
        //     {/*                            <CDropdownItem href="#">Another action</CDropdownItem>*/}
        //     {/*                            <CDropdownDivider/>*/}
        //     {/*                            <CDropdownItem href="#">Something else here</CDropdownItem>*/}
        //     {/*                        </CDropdownMenu>*/}
        //     {/*                    </CDropdown>*/}
        //
        //     {/*                </CNavbarNav>*/}
        //     {/*            </CContainer>*/}
        //     {/*            /!*<CForm className="d-flex" >*!/*/}
        //     {/*            /!*    <CFormInput type="search" className="me-2" placeholder="Search"/>*!/*/}
        //     {/*            /!*    <CButton type="submit" color="success" variant="outline">*!/*/}
        //     {/*            /!*        Search*!/*/}
        //     {/*            /!*    </CButton>*!/*/}
        //     {/*            /!*</CForm>*!/*/}
        //     {/*            <CNavLink href="/cart">*/}
        //     {/*                <CButton color="primary" className="position-relative">*/}
        //     {/*                    <CBadge color="danger" position="btop-end" shape="rounded-pill">*/}
        //     {/*                        {cartProducts.length}*/}
        //     {/*                    </CBadge>*/}
        //     {/*                    Cart*/}
        //     {/*                </CButton>*/}
        //     {/*            </CNavLink>*/}
        //     {/*        </CCollapse>*/}
        //     {/*    </CContainer>*/}
        //     {/*</CNavbar>*/}
        //
        // </div>

    )

}
export default NavBar;