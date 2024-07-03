import React, { useState } from 'react';
import axios from 'axios';
import './InputBox.css';
import LoadingIndicator from './LoadingIndicator';
import DisplayText from './DisplayText';

function InputBox() {
    const [inputText, setInputText] = useState("");
    const [transformedText, setTransformedText] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const activeButton = () => {
        alert(`${inputText} 입력 완료`);
      }
    const activeEnter = (e) => {
        if(e.key === "Enter") {
          activeButton();
        }
      }
    

    const handleInputChange = (event) => setInputText(event.target.value);

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
        <div className="inputBoxContainer">
            <input
                type="text"
                value={inputText}
                onChange={handleInputChange}
                className="inputField"
                onKeyDown={(e) => activeEnter(e)}
            />
            <button onClick={handleSubmit} className="submitButton">Press</button>
            <div className="resultContainer">
                {isLoading ? <LoadingIndicator /> : <DisplayText text={transformedText} />}
            </div>
        </div>
    );
}

export default InputBox;
