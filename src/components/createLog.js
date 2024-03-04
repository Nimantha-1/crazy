import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import create from '../assets/create.png';
import { Link } from "react-router-dom";
import "./login.css";


function createLog() {
  return (
    <>
     <Row className='black'>
      <Col fluid>
      </Col>
    </Row>
    <Form className='formWrapper'>
          <img className='imglog' src={create} alt="logo"/> 
          <p><span>Create</span> Account</p>
      <Form.Group className="mb-3" controlId="formBasicuserName">
        <Form.Control type="text" placeholder="User Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicrePassword">
        <Form.Control type="password" placeholder="Re-Enter Password" />
      </Form.Group>

      <Link to="/dashboard">
      <Button className="btnlog" variant="primary" type="submit">
        REGISTER
      </Button></Link>
      <br />
      <br />
      <Link to="/login" className='reg'>Login Here</Link>
    </Form>
    </>
  );
}

export default createLog;