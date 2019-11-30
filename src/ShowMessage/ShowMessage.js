import React from 'react';

const showMessageStyle = {
    border: '1px solid #4b8d00',
    padding: '8px',
    width: '32%',
    boxShadow: '2px 2px 3px #66c000',
    fontSize: '11px',
    marginLeft: '43%',
    marginTop: '-8px',
}

const ShowMessage = (props) => {
    return(
        <div style={showMessageStyle}>
            <p><b>Written By:</b> {props.name}</p>
            <p><b>Message:</b> {props.message}</p>
        </div>
    )
};

export default ShowMessage;