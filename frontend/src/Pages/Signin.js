import React, { useEffect, useState } from 'react'
import { Form, Button, Container} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import { signin } from '../redux/actions/userActions';
import LoadingBox from '../Components/LoadingAnimation'
import MessageBox from '../Components/MessageBox'


export const Signin = (props) =>{
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const redirect = props.location.search ? props.location.search.split('=')[1] :'/'
    const userSignin = useSelector((state) => state.userSignin)
    const {userInfo, loading, error} = userSignin
    const dispatch = useDispatch()
    const submitHandler = (e) =>{
        e.preventDefault()
        //signin action
        dispatch(signin(email, password))
    }
    useEffect(() =>{
        if(userInfo){
            props.history.push(redirect)
        }
    }, [props.history, redirect, userInfo])
    return(
        <Container>
            <Form onSubmit={submitHandler}>
                {loading && <LoadingBox></LoadingBox> }
                {error && <MessageBox>{error}</MessageBox>}
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" required onChange={(e) => setEmail(e.currentTarget.value)} />
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