import {useSelector} from "react-redux";
import style from './Header.module.scss';
import logo from '../../assets/logo1.png'
import {NavLink} from 'react-router-dom';
import {Badge, IconButton} from "@mui/material";
import {Search, ShoppingCart} from "@mui/icons-material";
import {useState} from "react";
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai";

const Header = () => {
    const cartProducts = useSelector(state => state.cart);
    const [nav, setNav] = useState(false)
    return (
        <header className={style.header}>
            <div className={style.wrapper}>
                <div className={style.box}>

                    <div onClick={()=> setNav(!nav)} className={style.mobile_btn}>
                        {nav ? <AiOutlineClose size={25}/> : <AiOutlineMenu size={25}/>}
                    </div>
                    <NavLink to="/">
                        <div className={style.left_side}>
                            <div className={style.logo}>
                                <img src={logo} alt="/"/>
                            </div>

                            <div className={style.headerInfo}>
                                <h3>Sun Glasses</h3>
                                <p>Online Shopping</p>
                            </div>
                        </div>
                    </NavLink>
                    <ul className={nav ? [style.menu, style.active].join(' ') : [style.menu]}>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Items">Products</NavLink>
                        </li>
                        <li>
                            <NavLink>About us</NavLink>
                        </li>
                        <li>
                            <NavLink>Contacts</NavLink>
                        </li>
                        <li className={style.mobile_sign}>
                            <NavLink>Sign In</NavLink>
                        </li>
                        <li className={style.mobile_search}>
                            <IconButton>
                                    <Search/>
                            </IconButton>
                        </li>
                    </ul>

                    <div className={style.icon_group}>

                            <button className={style.mobile_signout} href="">
                                <NavLink to="/login">
                                Sign In
                                </NavLink>
                            </button>


                        <IconButton>
                            <div className={style.search}>
                                <Search/>
                            </div>
                        </IconButton>
                        <NavLink to="/cart">
                            <IconButton>
                                <Badge>
                                    <ShoppingCart/>{cartProducts.length}
                                </Badge>
                            </IconButton>
                        </NavLink>
                    </div>
                </div>
            </div>
        </header>

        //
        // <Navbar sticky="top" collapseOnSelect expand="lg" className="bg-body-tertiary">
        //     <Container>
        //         <Navbar.Brand to="/" as={Link}>Redux-Toolkit</Navbar.Brand>
        //         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        //         <Navbar.Collapse id="responsive-navbar-nav">
        //             <Nav className="me-auto">
        //                 <Nav.Link to="/" as={Link}>Home</Nav.Link>
        //                 <Nav.Link to="/Items" as={Link}>Card</Nav.Link>
        //                 <NavDropdown title="About us" id="collasible-nav-dropdown">
        //                     <NavDropdown.Item href="#action/3.1">Benefits</NavDropdown.Item>
        //                     <NavDropdown.Item href="#action/3.2">Delivery</NavDropdown.Item>
        //                     <NavDropdown.Item href="#action/3.3">Contacts</NavDropdown.Item>
        //                 </NavDropdown>
        //             </Nav>
        //             <Nav>
        //                 <Nav.Link to="/cart" as={Link}>Cart {cartProducts.length}</Nav.Link>
        //
        //             </Nav>
        //         </Navbar.Collapse>
        //     </Container>
        // </Navbar>

    )

}
export default Header;