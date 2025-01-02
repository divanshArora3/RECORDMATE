import React, { useState } from 'react';

const App = () => {
    const [link, setLink] = useState('');
    const [responseMessage, setResponseMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/api/record', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ link }),
            });
            const data = await response.json();
            setResponseMessage(data.message);
        } catch (error) {
            setResponseMessage('An error occurred while starting the recording.');
        }
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>Google Meet Recorder</h1>
            <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
                <input
                    type="text"
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                    placeholder="Enter Google Meet Link"
                    style={{ padding: '10px', width: '80%', marginBottom: '10px' }}
                    required
                />
                <br />
                <button type="submit" style={{ padding: '10px 20px' }}>Start Recording</button>
            </form>
            {responseMessage && <p>{responseMessage}</p>}
        </div>
    );
};

export default App;
