import React, { useState } from 'react';
import axios from 'axios';
import './InputBox.css';
import LoadingIndicator from './LoadingIndicator';
import DisplayText from './DisplayText';

function InputBox() {
    const [inputText, setInputText] = useState("");
    const [transformedText, setTransformedText] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async () => {
        setIsLoading(true);
        try {
            // FastAPI 서버에 POST 요청을 보냅니다.
            const response = await axios.get(`http://localhost:8000/process/`, {params: {query: inputText}});
            setTransformedText(response.data.answer);
        } catch (error) {
            console.error('Error fetching transformed text:', error);
        }
        setIsLoading(false);
    };

    return (
        <div className="inputBoxContainer">
            <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                className="inputField"
                onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
            />
            <button onClick={handleSubmit} className="submitButton">Press</button>
            <div className="resultContainer">
                {isLoading ? <LoadingIndicator /> : <DisplayText text={transformedText} />}
            </div>
        </div>
    );
}

export default InputBox;
