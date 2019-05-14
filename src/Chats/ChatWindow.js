import React from 'react'
import Chat from './Chat'
import './chats.css'


function ChatWindow() {
    const chats = [
        {
            name: 'John',
            message: 'Hello. How are you today?',
            image: 'https://www.w3schools.com/w3images/bandmember.jpg',
            origin: 'from',
            time: '10:26'
        },
        {
            name: 'Steve',
            message: "Hey! I'm fine. Thanks for asking!",
            image: 'https://www.w3schools.com/w3images/avatar_g2.jpg',
            origin: 'to',
            time: '10:27'
        },
        {
            name: 'John',
            message: 'Sweet! So, what do you wanna do today?',
            image: 'https://www.w3schools.com/w3images/bandmember.jpg',
            origin: 'from',
            time: '10:28'
        },
        {
            name: 'Steve',
            message: 'Nah, I dunno. Play soccer.. or learn more coding perhaps?',
            image: 'https://www.w3schools.com/w3images/avatar_g2.jpg',
            origin: 'to',
            time: '10:29'
        },
        {
            name: 'John',
            message: 'Shall I join you?',
            image: 'https://www.w3schools.com/w3images/bandmember.jpg',
            origin: 'from',
            time: '10:30'
        },
        {
            name: 'Steve',
            message: 'Why not!',
            image: 'https://www.w3schools.com/w3images/avatar_g2.jpg',
            origin: 'to',
            time: '10:33'
        },
    ]

    return (
        <div className="wrapper">
            <h1>Chat Messages</h1>
            {
                chats.map(function (chat, index) {
                    return <Chat name={chat.name} message={chat.message} image={chat.image} origin={chat.origin} time={chat.time}/>
                })
            }
        </div>
    )
}

export default ChatWindow