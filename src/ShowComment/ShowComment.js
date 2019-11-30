import React from 'react';
import '../App.css';

const showCommentStyle = {
    border: '1px solid #004b8d',
    padding: '15px',
    width: '45%',
    margin: '10px auto',
    boxShadow: '2px 2px 3px #0074d9',
    fontSize: '11px',
}

const ShowComment = (props) => {
    return(
        <div style={showCommentStyle}>
            <p><b>Written By:</b> {props.name}</p>
            <p><b>Comment:</b> {props.comment}</p>
        </div>
    )
};

export default ShowComment;