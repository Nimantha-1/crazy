import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import loginLogo from '../assets/loginLogo.png';
import { Link } from "react-router-dom";
import "./login.css";

function login() {
  return (
    <>
     <Row className='black'>
      <Col fluid>
      </Col>
    </Row>
    <Form className='formWrapper'>
          <img className='imglog' src={loginLogo} alt="logo"/>
          <p>Login Here...</p>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Form.Group className="mb-4" controlId="formBasicCheckbox">
      <Link to="/forgotPassword" className='reg'>Forgot Password?</Link>
      </Form.Group><Link to="/dashboard">
      <Button className="btnlog" variant="primary" type="submit">
        LOGIN
      </Button></Link>
      <br />
      <br />
      <Link to="/createLog" className='reg'>Register Here</Link>
    </Form>
    </>
  );
}

export default login;