import React, { useState, useEffect } from 'react';

export default function Clock() {
    const [time, updateTime] = useState(new Date().toString())
    useEffect(() => {
        let timer = setInterval(function () {
            updateTime(new Date())
        }, 1000)
        return () => {
            clearInterval(timer)
        }
    }, [])
    return (
        <h2>{time.toString()}</h2>
    )
}
