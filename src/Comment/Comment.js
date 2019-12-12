import React, { useState } from 'react';

const Comment = (props) => {
  const { onSubmit } = props;

  const [ commentState, setCommentState ] = useState({
    name: '',
    comment: '',
  });

  // update the name string in commentState on change to the input
  const onNameChange = (event) => {
    console.log("[onNameChange]", event.target.value);
    setCommentState({
      ...commentState,
      name: event.target.value
    })
  };

  // update the comment string in commentState on change to the input
  const onCommentChange = (event) => {
    console.log("[onCommentChange]", event.target.value);
    setCommentState({
      ...commentState,
      comment: event.target.value
    })
  };

  const saveComment = () => {
    onSubmit(commentState);
    setCommentState({
      name: '',
      comment: ''
    })
  };

  return (
    <div className="comment">
      <input 
        type="text" 
        className="comment-name"
        placeholder="Your name..."
        value={commentState.name}
        onChange={onNameChange}
      />

      <br />

      <textarea 
        className="comment-textarea"
        placeholder="Type your comment here..."
        onChange={onCommentChange}
        value={commentState.comment}
      />
      <button 
        type="button"
        onClick={() => saveComment()}> Submit Comment</button>
  </div>
  );
}

export default Comment;
