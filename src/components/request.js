import { useState } from 'react';
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
import AddBoxIcon from '@mui/icons-material/AddBox';

function Request() {
    const rows = [ 
        { emailid: 1, sub: "John", desc: 30, sentd: "10/02/2024", more: <AddToHomeScreenIcon/>},
        { emailid: 2, sub: "John", desc: 30, sentd: "10/02/2024", more: <AddToHomeScreenIcon/>},
        { emailid: 3, sub: "John", desc: 30, sentd: "10/02/2024", more: <AddToHomeScreenIcon/>},
        { emailid: 4, sub: "John", desc: 30, sentd: "10/02/2024", more: <AddToHomeScreenIcon/>},
        { emailid: 5, sub: "John", desc: 30, sentd: "10/02/2024", more: <AddToHomeScreenIcon/>},
        { emailid: 6, sub: "John", desc: 30, sentd: "10/02/2024", more: <AddToHomeScreenIcon/>},
        { emailid: 7, sub: "John", desc: 30, sentd: "10/02/2024", more: <AddToHomeScreenIcon/>},
        { emailid: 8, sub: "John", desc: 30, sentd: "10/02/2024", more: <AddToHomeScreenIcon/>},
        { emailid: 9, sub: "John", desc: 30, sentd: "10/02/2024", more: <AddToHomeScreenIcon/>},
        { emailid: 10, sub: "John", desc: 30, sentd: "10/02/2024", more: <AddToHomeScreenIcon/>},
        { emailid: 11, sub: "John", desc: 30, sentd: "10/02/2024", more: <AddToHomeScreenIcon/>},
        { emailid: 12, sub: "John", desc: 30, sentd: "10/02/2024", more: <AddToHomeScreenIcon/>}, 
         

    ];

    const MyTable = () => (
        <div style={{ maxHeight: "350px", overflowY: "auto" }}> 
            
            <Table striped bordered hover> 
                <thead style={{position: "sticky", top: "0", backgroundColor: "#22f0f0" }}> 
                    <tr> 
                        <th className="table-header-bg">Email ID</th> 
                        <th className="table-header-bg">Subject</th> 
                        <th className="table-header-bg">Description</th>
                        <th className="table-header-bg">Sent Date</th>
                        <th className="table-header-bg">More</th>
                    </tr> 
                </thead> 
                <tbody> 
                   
                    {rows.map((row) => ( 
                        <tr key={row.id}> 
                            <td>{row.emailid}</td> 
                            <td>{row.sub}</td> 
                            <td>{row.desc}</td>
                            <td>{row.sentd}</td>  
                            <td>{row.more}</td> 
                        </tr> 
                    ))} 
                </tbody> 
            </Table> 
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
                    <Tabs variant="pills" defaultActiveKey="home" className="mb-3" fill>
                        <Tab eventKey="home" title="Request Sending">
                            <div className='inv-dashing'>
                                <MyTable />
                            </div>
                            <Row className='inv-content2'>
                                <Col xs={4}><Button className='printbtnx'><AddBoxIcon/>&nbsp;&nbsp;Add</Button></Col>
                                <Col xs={5}></Col>
                                <Col xs={1}>
                                <Button className='printbtn'><LocalPrintshopIcon/>&nbsp;&nbsp;Print</Button>
                                </Col>
                            </Row>
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </>
    );
}

export default Request;