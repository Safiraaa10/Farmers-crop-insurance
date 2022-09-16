import React from 'react'
import { Button, Card, CardBody, CardHeader, Col, Container, FormGroup, Input, Label, Row } from 'reactstrap';
import Base from '../component/Base'

const Signup=()=> {
  return (
    <div className=' vh-100 bg-image' style={{ backgroundImage: "url('https://img.krishijagran.com/media/61521/rabi23.jpg')", backgroundSize: 'cover',
    overflow: 'hidden' }}>
      <Base>
      
     <Container>

      <Row className='mt-4'>
      <Col sm={{size:6,offset:3}}>
      <Card color='dark' outline>

<CardHeader className='text-center'>

<h3>SignUp Form</h3>

</CardHeader>
<CardBody>
  <form>
    <FormGroup>

      <Label for='name'>Enter Full Name</Label>

      <Input
      type='text' placeholder='Enter Full Name '
      id='name'
      
      ></Input>
    </FormGroup>
   
    <FormGroup>

      <Label for='Aadhar'>Enter Aadhar Number</Label>

      <Input
      type='number' placeholder='Enter Aadhar Number '
      id='Aadhar'

      ></Input>
    </FormGroup>
    <FormGroup>

      <Label for='phoneno'>Enter Phone Number</Label>

      <Input
      type='number' placeholder='Enter Phone Number'
      id='phoneno'

      ></Input>
    </FormGroup>

    <FormGroup>

      <Label for='address'>Enter Address</Label>

      <Input
      type='textarea' placeholder='Enter Address '
      id='address'

      ></Input>
      </FormGroup>
    <FormGroup>

      <Label for='city'>Enter city</Label>

      <Input
      type='text' placeholder='Enter city '
      id='city'

      ></Input>
      </FormGroup>
    <FormGroup>

      <Label for='state'>Enter State</Label>

      <Input
      type='text' placeholder='Enter State '
      id='state'

      ></Input>
      </FormGroup>

    <FormGroup>

      <Label for='username'>Enter Username</Label>

      <Input
      type='text' placeholder='Enter username'
      id='username'

      ></Input>
    </FormGroup>
    <FormGroup>

      <Label for='password'>Enter Password</Label>

      <Input
      type='password' placeholder='Enter Password'
      id='password'

      ></Input>
    </FormGroup>

    <Container className='text-center'>

    <Button color='success'>Register</Button>
    <Button color='secondary'className='ms-2' type='reset'>Reset</Button>

    </Container>
  </form>
</CardBody>
</Card>

      </Col>



      </Row>

     </Container>
      
      </Base>
      <br /><br />
    </div>
  )
}
export default Signup;

