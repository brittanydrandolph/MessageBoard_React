import React from 'react';

const ShowMessage = (props) => {
    return(
        <div>
            <p><b>Written By:</b> {props.name}</p>
            <p><b>Message:</b> {props.message}</p>
        </div>
    )
};

export default ShowMessage;