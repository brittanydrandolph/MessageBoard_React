import React, { Component } from 'react';
import './App.css';
import Comment from './Comment/Comment';
import ShowComment from './ShowComment/ShowComment';

class App extends Component {
  constructor() {
    super();
    this.state = {
      commentId: 1,
      messageId: 1,
      comments: [
        {
          commentId: 1, 
          comment: "Honestly, am I the only person who’s ever bothered to read Hogwarts, A History?", 
          name: "Hermonie Granger (hard-coded)",
          messages:[
            {
              commentId: 1,
              messageId: 1, 
              message: "Hermonie... you have that book memorized...", 
              name: "Ron Weasley (hard-coded)",
            },
          ]
        },
        {
          commentId: 2, 
          comment: "Quidditch practice, tomorrow night. 7PM. Rain or shine.", 
          name: "Harry Potter (hard-coded)",
          messages:[
            {
              commentId: 2,
              messageId: 3, 
              message: "Why practice, Potter? Gryffindor has no chance of winning the Quidditch Cup this year.", 
              name: "Draco Malfoy(hard-coded)",
            },
          ]
        }
      ]
    };
    this.onCommentSubmit = this.onCommentSubmit.bind(this);
    this.onMessageSubmit = this.onMessageSubmit.bind(this);
  };

  onCommentSubmit(newComment) {
    this.setState({commentId: this.state.commentId++ })
    newComment.commentId = this.state.commentId;
    console.log("[new comment]", newComment);
    this.setState({
      ...this.state,
      comments: [...this.state.comments, newComment]
    });
  };

  onMessageSubmit(newMessage){
    this.setState({messageId: this.state.messageId++})
    newMessage.commentId = this.state.commentId;
    console.log("[new message]", newMessage);
    this.setState({
      ...this.state, 
      messages: [...this.state.comments.message, newMessage]
    });
  };

render() {


  return (
    <div className="App">
      <h1>Message Board</h1>
    <Comment onSubmit={this.onCommentSubmit}/>
    {this.state.comments && this.state.comments.map(comment => {
      return (
        <ShowComment onSubmit={this.onMessageSubmit}
        name={comment.name}
        comment={comment.comment}
        key={comment.commentId}
        data = {comment} />
        )})}
    </div>
  );
}
}
export default App;