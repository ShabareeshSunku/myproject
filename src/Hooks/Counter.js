import React, { useState } from 'react';

export default function Counter() {
    const [count, updateCount] = useState(0)
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => updateCount(count + 1)}>+</button>
            <button onClick={() => { if (count > 0) { updateCount(count - 1) } }}>-</button>
        </div>
    )
}

this.state = {
   loading : true 
}
this.setState({
    loading : false
})