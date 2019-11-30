import React, { Component } from 'react';
import './App.css';
import Comment from './Comment/Comment';
import ShowComment from './ShowComment/ShowComment';
import ShowMessage from './ShowMessage/ShowMessage';
import Message from './Message/Message';

class App extends Component {
  // there are some shortcuts when using class components that are less verbose 
  // than this, but this is the written out explicit version that describes just 
  // how much work goes into class based components every function we create in 
  // a class component has to be bound in the constructor
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
        },
      ],
      messages: [
        {
          messageId: 1, 
          commentId: 1, 
          message: "You're the brightest witch of your age, H!", 
          name: "Ginny Weasley (hard-coded)",
        }
      ]
    };
    this.onCommentSubmit = this.onCommentSubmit.bind(this);
    this.onMessageSubmit = this.onMessageSubmit.bind(this);
  };

  onCommentSubmit(newComment) {
    // this code is just to immitate our fake database IDs
    // the logic is basically the same as like a counter app
    this.setState({commentId: this.state.commentId++ }) // incr DB id
    newComment.commentId = this.state.commentId; // add DB id -- fake db code
    console.log("[new comment]", newComment);

    // this is the heart of the logic, the spread operators are copying old data
    // into a new object so we don't try to mutate the data from the old state
    // but instead provide it with entirely new objects in memory and then the 
    // browser will just delete the old values in garbage collection
    this.setState({
      ...this.state,
      comments: [...this.state.comments, newComment]
    });
  };

  onMessageSubmit(newMessage){
    this.setState({messageId: this.state.messageId++})
    newMessage.commentId = this.state.commentId;
    console.log("[new comment]", newMessage);
    this.setState({
      ...this.state, messages: [...this.state.messages, newMessage]
    });
  };

  // you will notice in the maps below I did a "&&" before the map, this is a
  // best practice and required when using typescript because if an array is
  // potentially undefined because the component will load faster than a DB
  // will fetch the data for it, than it will try and execute the map function
  // on an undefined variable and that will crash.  The and is a little quick
  // type coersion that requires the presence of comments to be truthy in order
  // to then execute the map function on it -- you will see this a lot in 
  // javascript :)
  render() {

    return (
      <div className="App">
        <h1>Message Board</h1>
        <Comment onSubmit={this.onCommentSubmit}/>
        {this.state.comments && this.state.comments.map(commment => {
          return (
            <ShowComment 
              name={commment.name}
              comment={commment.comment}
              key={commment.commentId}
            />
          );
        })};
        {this.state.messages && this.state.messages.map(message => {
          return (
            <ShowMessage 
              name={message.name}
              message={message.message}
              key={message.messageId}
            />
          );
        })};
        <Message onSubmit={this.onMessageSubmit}/>
      </div>
    );
  }
}

export default App;
