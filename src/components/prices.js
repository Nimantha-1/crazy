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
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import AddBoxIcon from '@mui/icons-material/AddBox';


function Prices() {
    const rows = [ 
        { itemid: 1, name: "John", desc: "vegetable", oldp: "10/02/2024", currentp: "11/02/2024", addnewp: <AddCircleIcon/>}, 
        { itemid: 2, name: "John", desc: "vegetable", oldp: "10/02/2024", currentp: "11/02/2024", addnewp: <AddCircleIcon/>},
        { itemid: 3, name: "John", desc: "vegetable", oldp: "10/02/2024", currentp: "11/02/2024", addnewp: <AddCircleIcon/>},
        { itemid: 4, name: "John", desc: "vegetable", oldp: "10/02/2024", currentp: "11/02/2024", addnewp: <AddCircleIcon/>},
        { itemid: 5, name: "John", desc: "vegetable", oldp: "10/02/2024", currentp: "11/02/2024", addnewp: <AddCircleIcon/>},
        { itemid: 6, name: "John", desc: "vegetable", oldp: "10/02/2024", currentp: "11/02/2024", addnewp: <AddCircleIcon/>},
        { itemid: 7, name: "John", desc: "vegetable", oldp: "10/02/2024", currentp: "11/02/2024", addnewp: <AddCircleIcon/>},
        { itemid: 8, name: "John", desc: "vegetable", oldp: "10/02/2024", currentp: "11/02/2024", addnewp: <AddCircleIcon/>},
        { itemid: 9, name: "John", desc: "vegetable", oldp: "10/02/2024", currentp: "11/02/2024", addnewp: <AddCircleIcon/>},
        { itemid: 10, name: "John", desc: "vegetable", oldp: "10/02/2024", currentp: "11/02/2024", addnewp: <AddCircleIcon/>},
        { itemid: 11, name: "John", desc: "vegetable", oldp: "10/02/2024", currentp: "11/02/2024", addnewp: <AddCircleIcon/>},
        { itemid: 12, name: "John", desc: "vegetable", oldp: "10/02/2024", currentp: "11/02/2024", addnewp: <AddCircleIcon/>},
        { itemid: 13, name: "John", desc: "vegetable", oldp: "10/02/2024", currentp: "11/02/2024", addnewp: <AddCircleIcon/>},

    ];

    const MyTable = () => (
        <div style={{ maxHeight: "350px", overflowY: "auto" }}> 
            
            <Table striped bordered hover> 
                <thead style={{position: "sticky", top: "0", backgroundColor: "#22f0f0" }}> 
                    <tr> 
                        <th className="table-header-bg">Item ID</th> 
                        <th className="table-header-bg">Name</th> 
                        <th className="table-header-bg">Description</th>
                        <th className="table-header-bg">Old price(Rs.)</th>
                        <th className="table-header-bg">Current Price(Rs.)</th>
                        <th className="table-header-bg">Add New Price</th>
                    </tr> 
                </thead> 
                <tbody> 
                   
                    {rows.map((row) => ( 
                        <tr key={row.id}> 
                            <td>{row.itemid}</td> 
                            <td>{row.name}</td> 
                            <td>{row.desc}</td>
                            <td>{row.oldp}</td> 
                            <td>{row.currentp}</td> 
                            <td>{row.addnewp}</td> 
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
                        <Tab eventKey="home" title="Latest Prices">
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

export default Prices;
