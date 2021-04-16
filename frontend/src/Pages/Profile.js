import React, { useEffect } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { detailsUser } from '../redux/actions/userActions'
import LoadingBox from '../Components/LoadingAnimation'
import MessageBox from '../Components/MessageBox'

export const Profile = () =>{
    const userSignin = useSelector((state) => state.userSignin)
    const {userInfo} = userSignin
    const userDetails = useSelector((state) => state.userDetails)
    const {loading, error, user} = userDetails
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(detailsUser(userInfo._id))
    }, [dispatch, userInfo._id])
    const submitHandler = (e) => {
        e.preventDefault()

    }
    return (
        <Container>
            <Form onSubmit={submitHandler}>
                <h1>Your Profile</h1>
                {loading ? 
                (<LoadingBox></LoadingBox> ) :
                error ? 
                (<Button variant="outline-danger" disabled><MessageBox>{error}</MessageBox></Button>) : 
                ( 
                 <>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" value={user.name} />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={user.email} />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter password"/>
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter confirm password"/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Update
                    </Button>
                 </>
                )}
            </Form>
        </Container>
    )
}