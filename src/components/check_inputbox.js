import React, { useState } from 'react';

function Checkinputbox() {
  const [checkNumbers, setCheckNumbers] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost/api/notcheckToCheck/check.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ inv_id: checkNumbers }),
      });
      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      console.error('Error:', error);
      setMessage('An error occurred while processing your request.');
    }
  };

  return (
    <div>
      <h2>Insert Check Received</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="inv_id">Check Numbers (comma-separated):</label><br />
        <input
          type="text"
          id="inv_id"
          name="inv_id"
          value={checkNumbers}
          onChange={(e) => setCheckNumbers(e.target.value)}
        /><br /><br />
        <input type="submit" value="Submit" />
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Checkinputbox;
