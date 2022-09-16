import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Base from '../component/Base';
import { Button, Card, CardBody, CardHeader, Col, Container, Form, FormGroup, Row, Input,Label } from 'reactstrap';
import { NavLink as ReactLink } from 'react-router-dom';
const Login =()=> {


    

  return (
    <div className=' vh-100 bg-image' style={{ backgroundImage: "url('https://img.krishijagran.com/media/61521/rabi23.jpg')", backgroundSize: 'cover',
    overflow: 'hidden' }}>
        
   <Base>
   <br /><br /><br /><br /><br /><br />
<Container className='mt-5'>
    <Row >
        <Col sm={{size:6,offset:3}}>
            
        <Card color='dark' outline>
            <CardHeader className='text-center my-3'>
                <h3>Login</h3>
            </CardHeader>
            <CardBody>
                <Form>
                    <FormGroup>
                        <Label for='Aadhar'>Enter Aadhar Number</Label>

                        <Input
                        type='number' placeholder='Enter Aadhar Number Here'
                        id='Aadhar'

                        ></Input>
                    </FormGroup>

                    <FormGroup>
                        <Label for='password'>Enter Password</Label>

                        <Input
                        type='password' placeholder='Enter Password'
                        id='password'

                        ></Input>
                       

                        
                    </FormGroup>
                    <FormGroup>
                        

                        <Input
                        type='checkbox' 
                        id='checkbox'

                        > </Input> I accept terms and conditions
                    </FormGroup>
                    
                    <Container className='text-center '>
                    <Button color='success'>Login</Button>
                    <Button color='secondary' className='mx-3'tag={ReactLink} to="/Signup">Signup</Button>
                
                    </Container>
                </Form>
                    
                
            </CardBody>
        </Card>
        </Col>
    </Row>
</Container>
   </Base>
    </div>
  )
}
export default Login;
