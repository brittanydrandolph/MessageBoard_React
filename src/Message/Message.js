import React, { useState } from 'react';

const Message = (props) => {
    const { onSubmit } = props;

    //Initilize an empty messageState and two functions to set it up
    const [ messageState, setMessageState] = useState ({
        name: '',
        message: ''
    });

    //Update the name string in messageState on change to the input
    const onNameChange = (event) => {
        console.log("[onNameChange]", event.target.value);
        setMessageState({
            ...messageState, name: event.target.value
        })
    };

    //Update the message string in messageState on chnage to the input
    const onMessageChange = (event) => {
        console.log("[onMessageChange]", event.target.value);
        setMessageState({
            ...messageState, message: event.target.value
        })
    };

    //When the submit button is clicked, pass the data to the function passed down
    //from App.js that will save the data to the App.js state and rerender the page
    //to show the changes
    const saveMessage = () => {
        onSubmit(messageState);
    };

    return (
        <div className="message">
            <input  
            type="text" 
            className ="message-name"
            placeholder="Your name..."
            value={messageState.name}
            onChange={onNameChange}
            />

            <textarea
            className="message-textarea"
            placeholder="Type your message reply here..."
            rvalue={messageState.message}
            onChange={onMessageChange}
            />
            
            <button 
            type="button"
            onClick={() => saveMessage()}> Submit message</button>
        </div>
    );
}

export default Message;