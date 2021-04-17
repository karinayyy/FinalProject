import React, { useState } from 'react';
import  { Navbar,
         Nav,
         Container, 
         DropdownButton,
         Dropdown}  from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import { signout } from '../redux/actions/userActions';

const Styles = styled.div `
    a, .navbar-brand, .navbar-nav, .nav-link {
        color: #adb1b8;
        &: hover {
            color: #ff
        }
    }
`

export function NaviBar(){
    
    const cart = useSelector(state => state.cart)
    const {cartItems} = cart

    const userSignin = useSelector((state) => state.userSignin)
    const {userInfo} = userSignin
    const dispatch = useDispatch()
    const signoutHandler = () => {
        dispatch(signout())
    }
    return(
        <>
            <Styles>
                <Navbar collapseOnSelect expand="lg" bg="dark" varisnt="dark">
                    <Container>
                        <Navbar.Brand>SuperNav</Navbar.Brand>
                        <Navbar.Toggle aria-contrals="responsive-nav"/>
                        <Navbar.Collapse id="responsive-Navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link><Link to="/">Home</Link></Nav.Link>
                                <Nav.Link><Link to="/cart">Cart 
                                                            {cartItems.length > 0 && (<span style={{'margin': '0.1rem', 
                                                                                                    'padding': '0.2rem',
                                                                                                    'fontSize': '14px',
                                                                                                    'color':'red'}}>{cartItems.length}</span>)}
                                </Link></Nav.Link>
                                <Nav.Link><Link to="/users">Users</Link></Nav.Link>
                            </Nav>
                            <Nav>
                                {
                                    userInfo ? (
                                            <DropdownButton id="dropdown-basic-button" title={userInfo.name} variant="secondary">
                                                <Dropdown.Item><Nav.Link><Link to="/profile">{userInfo.name}</Link></Nav.Link></Dropdown.Item>
                                                <Dropdown.Item><Nav.Link><Link to="#signout" onClick={signoutHandler}>Sign Out</Link></Nav.Link></Dropdown.Item>
                                            </DropdownButton>
                                    ) :
                                    (
                                        <Nav.Link><Link to="/signin">Sign In</Link></Nav.Link>
                                    )
                                }
                                <Nav.Link><Link to="/register">Log In</Link></Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Styles>
            
            
        </>
    )
}