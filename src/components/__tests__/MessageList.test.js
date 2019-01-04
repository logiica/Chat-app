import React from 'react';

import Adapter from 'enzyme-adapter-react-16';
import {configure, mount} from 'enzyme';

import MessageList from '../MessageList';

configure({ adapter: new Adapter() });


let messageList;

beforeEach ( ()=> {
    const messages = [
        {id:"01",senderId:"Bud",text:"Whos on first?"},
        {id:"02",senderId:"Lou",text:"Who"},
        {id:"03",senderId:"Bud",text:"What?"},
        {id:"04",senderId:"Lou",text:"Whats on second"}
    ]
    messageList = mount(
        <MessageList messages={messages}/>
    );
})


it('creates 1 <li> per message', () => {
    expect(messageList.find('li').length).toEqual(4);
});

it('shows the text for each message', () => {
    expect(messageList.render().text()).toContain("Whos on first?");
    expect(messageList.render().text()).toContain("Who"); 
    expect(messageList.render().text()).toContain("What?");
    expect(messageList.render().text()).toContain("Whats on second");             
});
