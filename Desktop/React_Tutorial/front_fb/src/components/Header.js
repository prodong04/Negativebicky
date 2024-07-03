// src/components/Header.js
import React, { useState } from 'react';
import axios from 'axios';

function Header() {
    const [inputText, setInputText] = useState("");
    const [transformedText, setTransformedText] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };

    const handleSubmit = async () => {
        setIsLoading(true);
        try {
            const response = await axios.post('http://localhost:5000/process-text', { inputText });
            setTransformedText(response.data.transformedText);
        } catch (error) {
            console.error('Error fetching transformed text:', error);
        }
        setIsLoading(false);
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <h1 style={{ fontSize: '70px' }}>🍀Fucky Bicky🍀</h1>
            <div style={{ 
                width: '600px',
                height: '300px',
                backgroundColor: 'grey',
                margin: '20px auto',
                padding: '10px',
                borderRadius: '10px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <input
                    type="text"
                    value={inputText}
                    onChange={handleInputChange}
                    style={{ width: '80%', padding: '10px', marginBottom: '10px' }}
                />
                <button onClick={handleSubmit}>Send</button>
                {isLoading ? <img src="loading.gif" alt="Loading..." /> : <p>Transformed: {transformedText}</p>}
            </div>
        </div>
    );
}

export default Header;
