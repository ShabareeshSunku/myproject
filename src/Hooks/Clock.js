import React, { useState, useEffect } from 'react';

export default function Clock() {
    const [time, updateTime] = useState(new Date().toString())
    setInterval(function(){
        updateTime(new Date().toString())
    },1000)
    useEffect(()=>{
        document.title = time
    })
    return (
        <h2>{time}</h2>
    )
}
