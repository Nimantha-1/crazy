import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import password from '../assets/password.png';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import "./login.css";
import { Link } from 'react-router-dom';


function forgotPassword() {
  return (
    <>
     <Row className='black'>
      <Col fluid>
      </Col>
    </Row>
    <Form className='formWrapper'>
          <img className='imglog' src={password} alt="logo"/>
          <p className='class1'>FORGOT <br /><span className='span2'>PASSWORD</span></p>
          <br />
          <br />
      <div className="wrapper">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <div className="icon1"><EmailOutlinedIcon /></div>
        <Form.Control type="email" className='input' placeholder="Enter email" />
      </Form.Group>
      </div>
      <br />
      <br />
      <Link to="/newCredential">
      <Button className="btnlog" variant="primary" type="submit">
        Next
      </Button></Link>
    </Form>
    </>
  );
}

export default forgotPassword;


  
