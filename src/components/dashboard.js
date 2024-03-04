import { useState, useEffect } from 'react';
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

    function getUsers() {
        axios.get('http://localhost/api/order.php/')
            .then(response => {
                console.log(response.data);
                setUsers(response.data);
                checkReminders(response.data);
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

    function checkReminders(data) {
        const currentDate = new Date();
        const filteredReminders = data.filter(user => {
            const createdAtDate = new Date(user.created_at);
            const updatedAtDate = new Date(user.updated_at);
            const differenceInDays = Math.ceil((updatedAtDate - createdAtDate) / (1000 * 60 * 60 * 24));
            return differenceInDays > 25;
        });
        setReminders(filteredReminders);
    }

    const deleteUser = (id) => {
        axios.delete(`http://localhost/api/order.php/${id}/delete`)
            .then(function(response){
                console.log(response.data);
                getUsers();
            });
    }

    const deleteUser1 = (id) => {
        axios.delete(`http://localhost/api/notcheckToCheck/check_received_display.php/${id}/delete`)
            .then(function(response){
                console.log(response.data);
                getUsers1();
            });
    };

    const MyTable = () => (
        <div style={{maxHeight: "350px", overflowY: "auto"}}>
            <Table striped bordered hover>
                {/* Table headers */}
                <tbody>
                    {users.map((user, key) =>
                        <tr key={key}>
                            {/* Table data */}
                        </tr>
                    )}
                </tbody>
            </Table>
        </div>
    );

    const MyTable2 = () => (
        <div style={{maxHeight: "350px", overflowY: "auto"}}>
            <Table striped bordered hover>
                {/* Table headers */}
                <tbody>
                    {users1.map((user, key) =>
                        <tr key={key}>
                            {/* Table data */}
                        </tr>
                    )}
                </tbody>
            </Table>
        </div>
    );

    return (
        <>
            <NavBarCom />
            <div className="dashb-body">
                {/* Search bar and buttons */}
                <div className="dashing-section">
                    <Tabs variant="pills" defaultActiveKey="profile" className="mb-3" fill>
                        <Tab eventKey="home" title="Check Received">
                            <div className='inv-dashing'>
                                <MyTable2 />
                            </div>
                            {/* Total and print button */}
                        </Tab>
                        <Tab eventKey="profile" title="Not Check Receive">
                            <div className='inv-dashing'>
                                <MyTable />
                            </div>
                            {/* Total and print button */}
                        </Tab>
                    </Tabs>
                </div>
            </div>
            {/* Notification panel */}
            <div className="notification-panel">
                <h2>Reminders</h2>
                <ul>
                    {reminders.map((reminder, index) => (
                        <li key={index}>Invoice ID: {reminder.inv_id}</li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default Dashboard;
