import React, { Component } from 'react';

import '../styles/messageList.css'

class MessageList extends Component {
    formatTime(updatedAt) {
      let date=new Date(updatedAt);
      return `${date.getHours()}:${date.getMinutes()}`;
    }
    render() {
      return (
        <ul className="message-list">                 
          {this.props.messages.map(message => {
            return (
             <li key={message.id}>
               <div className="message-info">
                 {message.senderId} - {this.formatTime(message.updatedAt)}
               </div>
               <div className="message-text">
                 {message.text}
               </div>
             </li>
           )
         })}
       </ul>
      )
    }
  }

export default MessageList;  