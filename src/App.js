import React, { Component } from 'react';
import './App.css';
import Comment from './Comment/Comment';
import ShowComment from './ShowComment/ShowComment';

class App extends Component {
  constructor() {
    super();
    this.state = {
      commentId: 0,
      comments: [
        {
          commentId: 0, 
          comment: "Honestly, am I the only person who’s ever bothered to read Hogwarts, A History?", 
          name: "Hermonie Granger (hard-coded)",
          messages:[
            {
              commentId: 0, 
              message: "Hermonie... you have that book memorized...", 
              name: "Ron Weasley (hard-coded)",
            },
          ]
        },
      ]
    };
    this.onCommentSubmit = this.onCommentSubmit.bind(this);
    this.onMessageSubmit = this.onMessageSubmit.bind(this);
  };

  onCommentSubmit(newComment) {
    newComment.messages = this.state.comments.messages = [];

    this.setState({
      commentId: this.state.commentId++,  
    })

    newComment.commentId = this.state.commentId;
    console.log("[new comment]", newComment);
    this.setState({
      ...this.state,
      comments: [...this.state.comments, newComment]
    });
  };

  onMessageSubmit(newMessage, comment){
    //console.log("newMessage.Commentid: " + commentID)
    newMessage.commentId = comment.commentId;
    //console.log("[new message]", newMessage);

    for(var i = 0; i < this.state.comments.length; i++)
    {
      console.log("made it into for loop")
      if(this.state.comments[i].commentId === newMessage.commentId)
      {
        console.log("found a match")
        //Attempt 1: WORKS
        // this.setState({
        //   ...this.state.comments[i].messages.push(newMessage)
        // });

        //Attempt 2: WORKS
        this.setState ({...this.state.comments.messages = [] })
        comment.messages.push(newMessage)
        this.setState({
          ...this.state.comments[i],
          messages: [...this.state.comments[i].messages, newMessage]
        });
        console.log("COMMENT", comment)
        break;
      }
      else{
        console.log("no match")
      }
    }
  };

render() {
  return (
    <div className="App">
      <h1>Message Board</h1>
    <Comment 
    onSubmit={this.onCommentSubmit}
    />

    {this.state.comments && this.state.comments.map(comment => {
      return (
        <ShowComment onSubmit={this.onMessageSubmit}
        name={comment.name}
        comment={comment.comment}
        key={comment.commentId}
        commentId = {comment.commentId}
        data = {comment} />
        )})}
    </div>
  );
}
}
export default App;