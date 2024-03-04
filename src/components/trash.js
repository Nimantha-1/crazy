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
import RestoreIcon from '@mui/icons-material/Restore';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import AddBoxIcon from '@mui/icons-material/AddBox';

function Trash() {
    const rows = [ 
        { invoiceid: 1, dued: "10/02/2024", amount: 30, curdate: "10/02/2024",deldate: "11/02/2024",more: <AddToHomeScreenIcon/>, restore: <RestoreIcon/>},
        { invoiceid: 2, dued: "10/02/2024", amount: 30, curdate: "10/02/2024",deldate: "11/02/2024",more: <AddToHomeScreenIcon/>, restore: <RestoreIcon/>},
        { invoiceid: 3, dued: "10/02/2024", amount: 30, curdate: "10/02/2024",deldate: "11/02/2024",more: <AddToHomeScreenIcon/>, restore: <RestoreIcon/>},
        { invoiceid: 4, dued: "10/02/2024", amount: 30, curdate: "10/02/2024",deldate: "11/02/2024",more: <AddToHomeScreenIcon/>, restore: <RestoreIcon/>},
        { invoiceid: 5, dued: "10/02/2024", amount: 30, curdate: "10/02/2024",deldate: "11/02/2024",more: <AddToHomeScreenIcon/>, restore: <RestoreIcon/>},
        { invoiceid: 6, dued: "10/02/2024", amount: 30, curdate: "10/02/2024",deldate: "11/02/2024",more: <AddToHomeScreenIcon/>, restore: <RestoreIcon/>},
        { invoiceid: 7, dued: "10/02/2024", amount: 30, curdate: "10/02/2024",deldate: "11/02/2024",more: <AddToHomeScreenIcon/>, restore: <RestoreIcon/>},
        { invoiceid: 8, dued: "10/02/2024", amount: 30, curdate: "10/02/2024",deldate: "11/02/2024",more: <AddToHomeScreenIcon/>, restore: <RestoreIcon/>},
        { invoiceid: 9, dued: "10/02/2024", amount: 30, curdate: "10/02/2024",deldate: "11/02/2024",more: <AddToHomeScreenIcon/>, restore: <RestoreIcon/>},
        { invoiceid: 10, dued: "10/02/2024", amount: 30, curdate: "10/02/2024",deldate: "11/02/2024",more: <AddToHomeScreenIcon/>, restore: <RestoreIcon/>},
        { invoiceid: 11, dued: "10/02/2024", amount: 30, curdate: "10/02/2024",deldate: "11/02/2024",more: <AddToHomeScreenIcon/>, restore: <RestoreIcon/>},
        { invoiceid: 12, dued: "10/02/2024", amount: 30, curdate: "10/02/2024",deldate: "11/02/2024",more: <AddToHomeScreenIcon/>, restore: <RestoreIcon/>}, 
        
         

    ];

    const MyTable = () => (
        <div style={{ maxHeight: "350px", overflowY: "auto" }}> 
            
            <Table striped bordered hover> 
                <thead style={{position: "sticky", top: "0", backgroundColor: "#22f0f0" }}> 
                    <tr> 
                        <th className="table-header-bg">Invoice ID</th> 
                        <th className="table-header-bg">Due Date</th> 
                        <th className="table-header-bg">Amount(Rs.)</th>
                        <th className="table-header-bg">Current Date</th>
                        <th className="table-header-bg">Delivery Date</th>
                        <th className="table-header-bg">More</th>
                        <th className="table-header-bg">Restore</th>
                        
                    </tr> 
                </thead> 
                <tbody> 
                   
                    {rows.map((row) => ( 
                        <tr key={row.id}> 
                            <td>{row.invoiceid}</td> 
                            <td>{row.dued}</td> 
                            <td>{row.amount}</td>
                            <td>{row.curdate}</td> 
                            <td>{row.deldate}</td> 
                            <td>{row.more}</td>
                            <td>{row.restore}</td> 
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
                        <Tab eventKey="home" title="Trashed Invoices">
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

export default Trash;