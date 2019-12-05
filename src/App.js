import React, { Component } from 'react';
import './App.css';
import Comment from './Comment/Comment';
import ShowComment from './ShowComment/ShowComment';

class App extends Component {
  constructor() {
    super();
    this.state = {
      commentId: 1,
      // messageId: 1,
      comments: [
        {
          commentId: 0, 
          comment: "Honestly, am I the only person who’s ever bothered to read Hogwarts, A History?", 
          name: "Hermonie Granger (hard-coded)",
          messages:[
            {
              commentId: 0,
              // messageId: 0, 
              message: "Hermonie... you have that book memorized...", 
              name: "Ron Weasley (hard-coded)",
            },
          ]
        },
        {
          commentId: 1, 
          comment: "Quidditch practice, tomorrow night. 7PM. Rain or shine.", 
          name: "Harry Potter (hard-coded)",
          messages:[
            {
              commentId: 1,
              // messageId: 1, 
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

  onMessageSubmit(newMessage, commentID){
    console.log("newMessage.Commentid: " + commentID)
    newMessage.commentId = commentID;
    console.log("[new message]", newMessage);
    
    for(var i = 0; i < this.state.comments.length; i++)
    {
      console.log("made it into for loop")
      if(this.state.comments[i].commentId === newMessage.commentId)
      {
        console.log("found a match")
        //THIS IS WHERE IT'S BREAKING

        //ATTEMPT 1:
        //This works for messages posted to hard-coded comments, but not dynamic comments
        //Error message with this strategy: TypeError: Cannot read property 'push' of undefined
        //I'm thinking it doesn't know that messages is embedded in comments? 
        //Also, I'm not sure that this method is best practice.
        this.setState({
          ...this.state.comments[i].messages.push(newMessage)
        });

        //ATTEMPT 2:
        //Error message with the strategy: TypeError: Cannot convert undefined or null to object. 
        //But I can see the newMessage object being console logged from line 58, so I'm not sure
        //why it's saying the object is undefined or null?
        // this.setState({
        //   ...this.state.comments[i].messages,
        //   message: [...this.state.comments[i].messages.message, newMessage]
        // });

        const update = [this.state.comments[i].messages]
        console.log(update)
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
    <Comment onSubmit={this.onCommentSubmit}/>
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