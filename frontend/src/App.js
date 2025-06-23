// frontend/src/App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

var lint_test = 42;

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3001/hello')
      .then(res => setMessage(res.data.message))
      .catch(() => setMessage('Error connecting to backend'));
  }, []);

  return (
    <div>
      <h1>Frontend</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
