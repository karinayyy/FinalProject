import React, { useEffect, useState } from 'react'
import { Form, Button, Container} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import { register } from '../redux/actions/userActions';
import LoadingBox from '../Components/LoadingAnimation'
import MessageBox from '../Components/MessageBox'


export const Register = (props) =>{
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const redirect = props.location.search ? props.location.search.split('=')[1] :'/'
    const userRegister = useSelector((state) => state.userRegister)
    const {userInfo, loading, error} = userRegister
    const dispatch = useDispatch()
    const submitHandler = (e) =>{
        e.preventDefault()
        if(password !== confirmPassword){
            alert('Passwords do not match')
        }else{
        dispatch(register(name, email, password))
        } 
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
                {error && <Button variant="outline-danger" disabled><MessageBox>{error}</MessageBox></Button>}
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name" required onChange={(e) => setName(e.currentTarget.value)} />
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

                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Password" required 
                            onChange={(e) => setConfirmPassword(e.target.value)}/>
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Register
            </Button>
            Already have an account?<Link to={`/signin?redirect=${redirect}`}>Sign In</Link>
            </Form>
        </Container>
    )
}