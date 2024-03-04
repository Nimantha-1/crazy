import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

export default function MyVerticallyCenteredModal(props) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        if (props.inv_id) {
            getProducts(props.inv_id);
        }
    }, [props.inv_id]);

    function getProducts(inv_id) {
        axios.get(`http://localhost/api/checkbox/checkbox-db.php?inv_id=${inv_id}`)
            .then(response => {
                console.log(response.data);
                setProducts(response.data);
            })
            .catch(error => {
                console.error('Error fetching products:', error);
            });
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Modal heading
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <h1>List Products</h1>
                    <table>
                        <thead>
                            <tr>
                                <th>product_id</th>
                                <th>product_name</th>
                                <th>product_price</th>
                                <th>product_quantity</th>
                                <th>invoice_id</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product, key) =>
                                <tr key={key}>
                                    <td>{product.product_id}</td>
                                    <td>{product.product_name}</td>
                                    <td>{product.product_price}</td>
                                    <td>{product.product_quantity}</td>
                                    <td>{product.inv_id}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}
