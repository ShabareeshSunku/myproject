import React, { useState,useEffect } from 'react';

export default function Counter() {
    const [count, updateCount] = useState(0)
    //const [time, updateTime] = useState(new Date())
    useEffect(()=>{
        
    })
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => updateCount(count + 1)}>+</button>
            <button onClick={() => { if (count > 0) { updateCount(count - 1) } }}>-</button>
        </div>
    )
}