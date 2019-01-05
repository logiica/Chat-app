import React, { Component } from 'react';

import '../styles/messageList.css'

class MessageList extends Component {

  dateDifference(d1, d2) {
    let one_day=1000*60*60*24;    
    let d1_ms = d1.getTime();   
    let d2_ms = d2.getTime();  
    return Math.round((d2_ms-d1_ms)/one_day); 
  }


  formatTime(updatedAt) {
    let msgDate=new Date(updatedAt);
    let today=new Date();
    let dayDifference=this.dateDifference(msgDate,today);
    let dayString = msgDate.toISOString().slice(0,10);
    if (dayDifference === 0)
      dayString='today';
    else if (dayDifference === 1)
      dayString='yesterday';
    return `${msgDate.getHours()}:${msgDate.getMinutes()} ${dayString}`;
  }

    render() {
      return (
        <ul className="message-list">                 
          {this.props.messages.map(message => {
            return (
             <li key={message.id}>
               <div className="message-info">
                 {message.senderId} - 
                 <span class="message-time">{this.formatTime(message.updatedAt)}</span>
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