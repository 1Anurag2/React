// src/App.js
import  { useState, useEffect } from 'react';

const Api = () => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetch('http://localhost:3000/api/greet')
            .then(response => response.json())
            .then(data => setMessage(data.message));
    }, []);

    return (
        <div className="App">
            <h1>{message}</h1>
        </div>
    );
}

export default Api;
