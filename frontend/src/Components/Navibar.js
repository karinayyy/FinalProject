import React, { useState } from 'react';
import  { Navbar, Nav, Button, Container, Modal, Form }  from 'react-bootstrap';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

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
                                                            {cartItems.length > 0 && (<span>{cartItems.length}</span>)}
                                </Link></Nav.Link>
                                <Nav.Link><Link to="/users">Users</Link></Nav.Link>
                            </Nav>
                            <Nav>
                                <Nav.Link><Link to="/signin">Log In</Link></Nav.Link>
                                <Nav.Link><Link to="/register">Sign In</Link></Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Styles>
            
            
        </>
    )
}