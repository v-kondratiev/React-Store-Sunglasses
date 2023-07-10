import {
    CBadge,
    CButton,
    CCollapse,
    CContainer, CDropdown, CDropdownDivider, CDropdownItem, CDropdownMenu, CDropdownToggle, CForm, CFormInput,
    CNavbar,
    CNavbarBrand,
    CNavbarNav,
    CNavbarToggler,
    CNavItem, CNavLink
} from '@coreui/react';
import {useState} from "react";
import {useSelector} from "react-redux";

const NavBar = () => {

    const [visible, setVisible] = useState(false)
    const cartProducts = useSelector(state => state.cart);

    return (
        <div>
            <CNavbar expand="lg" colorScheme="light" className="bg-light" placement="sticky-top">
                <CContainer>
                    <CNavbarBrand href="/">Redux toolkit</CNavbarBrand>
                    <CNavbarToggler onClick={() => setVisible(!visible)}/>
                    <CCollapse className="navbar-collapse" visible={visible}>
                        <CContainer>
                            <CNavbarNav>
                                <CNavItem>
                                    <CNavLink href="/" active>Home</CNavLink>
                                </CNavItem>
                                <CNavItem>
                                    <CNavLink href="/Items">Products</CNavLink>
                                </CNavItem>
                                <CDropdown variant="nav-item" popper={false}>
                                    <CDropdownToggle color="secondary">Dropdown button</CDropdownToggle>
                                    <CDropdownMenu>
                                        <CDropdownItem href="#">Action</CDropdownItem>
                                        <CDropdownItem href="#">Another action</CDropdownItem>
                                        <CDropdownDivider/>
                                        <CDropdownItem href="#">Something else here</CDropdownItem>
                                    </CDropdownMenu>
                                </CDropdown>

                            </CNavbarNav>
                        </CContainer>
                        {/*<CForm className="d-flex" >*/}
                        {/*    <CFormInput type="search" className="me-2" placeholder="Search"/>*/}
                        {/*    <CButton type="submit" color="success" variant="outline">*/}
                        {/*        Search*/}
                        {/*    </CButton>*/}
                        {/*</CForm>*/}
                        <CNavLink href="/cart">
                            <CButton color="primary" className="position-relative">
                                <CBadge color="danger" position="btop-end" shape="rounded-pill">
                                    {cartProducts.length}
                                </CBadge>
                                Cart
                            </CButton>
                        </CNavLink>
                    </CCollapse>
                </CContainer>
            </CNavbar>

        </div>

    )

}
export default NavBar;