import React from 'react';
import '../App.css';
import ShowMessage from '../ShowMessage/ShowMessage';
import Message from '../Message/Message';

const ShowComment = (props) => {

    return(
        <div>
            <div className = "showCommentStyle">
                <p><b>Written By:</b> {props.name}</p>
                <p><b>Comment:</b> {props.comment}</p>
            </div>
            <div className="messages-shown">
            {props.data.messages && props.data.messages.map((message, index) => {
                    return (
                        <ShowMessage 
                        message={message.message} 
                        name={message.name}
                        messageId = {message.messageId}
                        key={index}
                        />
                    )
                })}
            </div>
            <Message onSubmit={props.onSubmit} data={props.data}/>
        </div>
    )
};
export default ShowComment;