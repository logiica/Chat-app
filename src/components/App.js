import React, { Component } from 'react';

//import { Chatkit, ChatManager, TokenProvider } from '@pusher/chatkit-client'
import Chatkit from '@pusher/chatkit-client';

import Title from './Title';
import MessageList from './MessageList';
import SendMessageForm from './SendMessageForm';

// const DUMMY_DATA = [
//   {
//     senderId: "perborgen",
//     text: "who'll win?"
//   },
//   {
//     senderId: "janedoe",
//     text: "who'll win?"
//   }
// ];
const instanceLocator = "v1:us1:20e5a10e-7a29-40ce-9a4b-241ed95039af";
const userId = "bj96825";
const roomId = 19376750;
const testToken = "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/20e5a10e-7a29-40ce-9a4b-241ed95039af/token";

class App extends React.Component {
  
  constructor(params) {
    super(params)
    this.state = {
       messages: []
    }
    this.sendMessage = this.sendMessage.bind(this)
  } 

  componentDidMount() {

    const chatManager = new Chatkit.ChatManager({
      instanceLocator: instanceLocator,
      userId: userId,
      tokenProvider: new Chatkit.TokenProvider({
        url: testToken
      })
    });

    chatManager.connect().then(currentUser => {
      console.log("chat connect",currentUser);
      console.log("Room Id",currentUser.rooms[0].id);
      this.currentUser = currentUser;      
      // currentUser.fetchMessages({
      //   roomId: currentUser.rooms[0].id,
      //   limit: 10,
      // })
      //   .then(messages => {
      //     console.log("Got messages",messages);
      //     this.setState({
      //         messages: [...this.state.messages, ...messages]})
      //   })
      //   .catch(err => {
      //     console.log(`Error fetching messages: ${err}`)
      //   }) 
      currentUser.subscribeToRoom({
        roomId: currentUser.rooms[0].id,
        hooks: {
          onMessage: message => {
            this.setState({
              messages: [...this.state.messages, message]
            })
          }  
        }           
      })
    })
  }

  sendMessage(text) {
    this.currentUser.sendMessage({
      text,
      roomId: this.currentUser.rooms[0].id
    })
  }

  render() {
    return (
      <div className="app">
        <Title />
        <MessageList messages={this.state.messages}/>
        <SendMessageForm sendMessage={this.sendMessage}/>
     </div>
    )
  }
}

export default App;
