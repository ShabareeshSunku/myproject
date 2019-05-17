import React from 'react'
function Chat(props){
    let time = '<b>'+props.time+'</b>'
    return (
        <div className={`container ${props.origin === 'from' ? 'left' : 'right'}`}>
            <div className={props.origin === 'from' ? 'left' : 'right'}>
                <p>{props.name}</p>
                <img src={props.image} alt="Avatar" style={{ width: '100%' }} />
            </div>
            <p>{props.message}</p>
            <p className={`time ${props.origin === 'from' ? 'right' : 'left'}`} dangerouslySetInnerHTML={{__html : time}}></p>
        </div>
    )
}

export default Chat