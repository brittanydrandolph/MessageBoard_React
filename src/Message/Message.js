import React, { useState } from 'react';

const Message = (props) => {
    const { onSubmit } = props;

    //Initilize an empty messageState and two functions to set it up
    const [messageState, setMessageState] = useState ({
        name: '',
        message: '',
    });

    //Update the name string in messageState on change to the input
    const onNameChange = (event) => {
        //console.log("[onNameChange]", event.target.value);
        setMessageState({
            ...messageState, name: event.target.value
        })
    };

    //Update the message string in messageState on change to the input
    const onMessageChange = (event) => {
        //console.log("[onMessageChange]", event.target.value);
        setMessageState({
            ...messageState, message: event.target.value
        })
    };

    const saveMessage = () => {
        let comment = props.data;
        onSubmit(messageState, comment);
        console.log("Message submitted successfully")
        setMessageState({
            message: '',
            name: '',
        })
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
            value={messageState.message}
            onChange={onMessageChange}
            />
            
            <button 
            // type="button"
            type="hidden"
            value={props.data.commentId}
            onClick={() => saveMessage()}> Submit message</button>
        </div>
    );
}

export default Message;