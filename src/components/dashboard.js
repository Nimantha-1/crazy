import React, { useState, useEffect } from 'react';
import NavBarCom from './navbarcom';
import { Col, Container, Row } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import "./dashboard.css";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddToHomeScreenIcon from '@mui/icons-material/AddToHomeScreen';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import axios from "axios";
import MyVerticallyCenteredModal from './show';

function Dashboard() {
    const [modalShow, setModalShow] = useState(false);
    const [users, setUsers] = useState([]);
    const [users1, setUsers1] = useState([]);
    const [reminders, setReminders] = useState([]);

    useEffect(() => {
        getUsers();
        getUsers1();
    }, []);

    useEffect(() => {
        checkReminders();
    }, [users, users1]);

    function getUsers() {
        axios.get('http://localhost/api/order.php/')
            .then(response => {
                console.log(response.data);
                setUsers(response.data);
            })
            .catch(error => {
                console.error('Error fetching users:', error);
            });
    }

    function getUsers1() {
        axios.get('http://localhost/api/notcheckToCheck/check_received_display.php/')
            .then(response => {
                console.log(response.data);
                setUsers1(response.data);
            })
            .catch(error => {
                console.error('Error fetching users:', error);
            });
    }

    function checkReminders() {
        const currentDate = new Date();
        const remindersArray = [];

        users1.forEach(user => {
            const createdAtDate = new Date(user.created_at);
            const timeDiff = currentDate.getTime() - createdAtDate.getTime();
            const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));

            if (daysDiff <= 25) {
                remindersArray.push({
                    inv_id: user.inv_id,
                    daysRemaining: 25 - daysDiff
                });
            }
        });

        setReminders(remindersArray);
    }

    const deleteUser = (id) => {
        axios.delete(`http://localhost/api/order.php/${id}/delete`)
            .then(response => {
                console.log(response.data);
                getUsers();
            });
    }

    const deleteUser1 = (id) => {
        axios.delete(`http://localhost/api/notcheckToCheck/check_received_display.php/${id}/delete`)
            .then(response => {
                console.log(response.data);
                getUsers1();
            });
    };

    const MyTable = () => (
        <div style={{maxHeight: "350px", overflowY: "auto"}}>
            <Table striped bordered hover>
                <thead style={{position: "sticky", top: "0", backgroundColor: "#22f0f0" }}>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>invoice_id</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, key) =>
                        <tr key={key}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.mobile}</td>
                            <td>{user.inv_id}</td>
                            <td>
                                <Button variant="primary" onClick={() => setModalShow(user.inv_id)}>Launch modal with grid</Button>
                                <Link to={`/user/${user.id}/edit`} style={{marginRight: "10px"}}>Edit</Link>
                                <button onClick={() => deleteUser(user.id)}>Delete</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>
            <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} inv_id={modalShow} />
        </div>
    );

    const MyTable2 = () => (
        <div style={{maxHeight: "350px", overflowY: "auto"}}>
            <Table striped bordered hover>
                <thead style={{position: "sticky", top: "0", backgroundColor: "#22f0f0" }}>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>invoice_id</th>
                    </tr>
                </thead>
                <tbody>
                    {users1.map((user, key) =>
                        <tr key={key}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.mobile}</td>
                            <td>{user.inv_id}</td>
                            <td>
                                <Button variant="primary" onClick={() => setModalShow(user.inv_id)}>Launch modal with grid</Button>
                                <Link to={`/user/${user.id}/edit`} style={{marginRight: "10px"}}>Edit</Link>
                                <button onClick={() => deleteUser1(user.id)}>Delete</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>
            <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} inv_id={modalShow} />
        </div>
    );

    return (
        <>
            <NavBarCom />
            <div className="dashb-body">
                <div className="searchingbar">
                    <div className="searching">
                        <Form.Control
                            type="text"
                            placeholder="Search"
                        />
                    </div>
                    <div id="searching-btn">
                        <Button className='submitingbtn' type="submit">Search</Button>
                    </div>
                </div>
                <div className="dashing-section">
                    <Tabs variant="pills" defaultActiveKey="profile" className="mb-3" fill>
                        <Tab eventKey="home" title="Check Received">
                            <div className='inv-dashing'>
                                <MyTable2 />
                            </div>
                            <Row className='inv-content2'>
                                <Col xs={4}>Total : </Col>
                                <Col xs={5}>01</Col>
                                <Col xs={1}>
                                    <Button className='printbtn'><LocalPrintshopIcon />&nbsp;&nbsp;Print</Button>
                                </Col>
                            </Row>
                        </Tab>
                        <Tab eventKey="profile" title="Not Check Receive">
                            <div className='inv-dashing'>
                                <MyTable />
                            </div>
                            <Row className='inv-content2'>
                                <Col xs={4}>Total : </Col>
                                <Col xs={5}>01</Col>
                                <Col xs={1}>
                                    <Button className='printbtn'><LocalPrintshopIcon />&nbsp;&nbsp;Print</Button>
                                </Col>
                            </Row>
                            <div className="notifications">
                                <h3>Notifications</h3>
                                <ul>
                                    {reminders.map((reminder, index) => (
                                        <li key={index}>Invoice {reminder.inv_id} needs attention. {reminder.daysRemaining} days remaining.</li>
                                    ))}
                                </ul>
                            </div>
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </>
    );
}

export default Dashboard;
