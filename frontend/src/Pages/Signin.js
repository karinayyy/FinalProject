import React, { useState } from 'react'
import { Form, Button, Container} from 'react-bootstrap'
import {Link} from 'react-router-dom';


export const Signin = () =>{
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const submitHandler = (e) =>{
        e.preventDefault()
        //signin action
    }
    return(
        <Container>
            <Form onSubmit={submitHandler}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" required 
                            onChange={(e) => setPassword(e.target.value)}/>
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            New user?<Link to="/register">Create account</Link>
            </Form>
        </Container>
    )
}