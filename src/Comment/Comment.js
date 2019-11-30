import React, { useState } from 'react';

const Comment = (props) => {
  const { onSubmit } = props;

  // initalize an empty commentState and a function to set it
  // you can see how much less is involved with functional components
  // to set up state
  const [ commentState, setCommentState ] = useState({
    name: '',
    comment: ''
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

  // when the submit button is clicked, pass the data to the function passed down from App.js
  // that will save the data to App.js state
  const saveComment = () => {
    onSubmit(commentState);
  }

  // I removed the form because in javascript we actually don't really need
  // true forms, and forms come with a lot of baggage, such as preventing
  // default behavior.  In truth all we need to do is track data which we can
  // do with state.  So as each input is typed into, state in this component 
  // will update with every keystroke.  Now state COULD be in another component
  // and these onChange functions could be passed from a parent just like the
  // onSubmit is coming from App.js. I also moved your styles to css file to
  // make this file a little easier to read.
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
