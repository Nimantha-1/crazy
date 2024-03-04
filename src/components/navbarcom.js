import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./navbarcom.css";
import Nav from 'react-bootstrap/Nav';
import { useLocation, useNavigate } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Pro from "../img/pro.jpg";
import Worldball from "../img/world-ball.png";
import Image from 'react-bootstrap/Image';
import { Button } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Alert from 'react-bootstrap/Alert';

function NavBarCom() {
    const location = useLocation();
    const [activeKey, setActiveKey] = useState(location.pathname);
    const navigate = useNavigate();

    const handleNavSelect = (eventKey) => {
        navigate(eventKey);
        setActiveKey(eventKey);
    };

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            

            <Offcanvas show={show} onHide={handleClose} placement="start" className="mobcolor">
                
                <Offcanvas.Body>
                    <Nav variant="pills" activeKey={activeKey} onSelect={handleNavSelect}>
                        <Nav.Item className='navitem'>
                            <Nav.Link className='navlink' eventKey="/dashboard">Dashboard</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className='navitem'>
                            <Nav.Link className='navlink' eventKey="/order">Order</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className='navitem'>
                            <Nav.Link className='navlink' eventKey="/prices">Accepted Price List</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className='navitem'>
                            <Nav.Link className='navlink' eventKey="/request">Send Request</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className='navitem'>
                            <Nav.Link className='navlink' eventKey="/check">Check Inserting</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className='navitem'>
                            <Nav.Link className='navlink' eventKey="/trash">Trash</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className='logout'>
                            <Nav.Link className='navlink' eventKey="/logout">Log Out</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Offcanvas.Body>
            </Offcanvas>

            <Container fluid className='cont-sec-main'>
                <Row fluid className="rowsize1">
                    <Col fluid className="rowcolor">
                        <div className='header'>
                        <Button variant="primary" className="d-lg-none" onClick={handleShow}>Launch</Button>
                            <Image id='profile-img' src={Pro} roundedCircle />
                            <h3 id='header-name'>Name.PVT(Ltd.)</h3>
                           
                        </div>
                    </Col>
                </Row>
                <Row fluid className="rowsize2">
                    <Col fluid xs={2} className="rowcolor rowsize">
                        <Nav className='nav' variant="pills" activeKey={activeKey} onSelect={handleNavSelect}>
                            <Nav.Item className='navitem'>
                                <Nav.Link className='navlink' eventKey="/dashboard">Dashboard</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className='navitem'>
                                <Nav.Link className='navlink' eventKey="/order">Order</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className='navitem'>
                                <Nav.Link className='navlink' eventKey="/prices">Accepted Price List</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className='navitem'>
                                <Nav.Link className='navlink' eventKey="/request">Send Request</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className='navitem'>
                                <Nav.Link className='navlink' eventKey="/check">Check Inserting</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className='navitem'>
                                <Nav.Link className='navlink' eventKey="/trash">Trash</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className='logout'>
                                <Nav.Link className='navlink' eventKey="/logout">Log Out</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col fluid></Col>
                    <Col fluid xs={2} className='noti-col'>
                        <div>
                            <h5 id='noti-head'>Notification</h5>
                            <p id='noti-sec'></p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default NavBarCom;
