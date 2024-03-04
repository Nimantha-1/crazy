import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function App() {
  const [products, setProducts] = useState([
    { name: 'Car', price: 0, quantity: 0, inv_id: 0 },
    { name: 'Bike', price: 0, quantity: 0, inv_id: 0 },
    { name: 'Accessories', price: 0, quantity: 0, inv_id: 0 }
  ]);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost/api/checkbox/checkbox-db.php', products);
      // Handle success
      alert('Data submitted successfully');
      navigate('/order');

    } catch (error) {
      // Handle error
      console.error('Error submitting data:', error);
    }
  };

  const handleChange = (index, key, value) => {
    const updatedProducts = [...products];
    updatedProducts[index][key] = value;
    setProducts(updatedProducts);
  };

  return (
    <div className="container">
      <h4>Multiple Checkbox</h4>
      <hr />
      <form onSubmit={handleSubmit}>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th></th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>invoice_id</th>

            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td><input type="checkbox" name="prodid[]" value={product.name} /></td>
                <td>{product.name}</td>
                <td><input type="number" value={product.price} onChange={(e) => handleChange(index, 'price', e.target.value)} className="form-control" /></td>
                <td><input type="number" value={product.quantity} onChange={(e) => handleChange(index, 'quantity', e.target.value)} className="form-control" /></td>
                <td><input type="number" value={product.inv_id} onChange={(e) => handleChange(index, 'inv_id', e.target.value)} className="form-control" /></td>

              </tr>
            ))}
          </tbody>
        </table>
        <div className="text-center">
          <input type="submit" name="submit" className="btn btn-success" value="Submit" />
        </div>
      </form>
    </div>
  );
}

export default App;
