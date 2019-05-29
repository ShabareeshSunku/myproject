import React, { Component } from 'react';
import TimeContext from './TimeContext'

class Time extends Component {
    //static contextType = TimeContext
    render() {
        const time = this.context.time
        return <h2>{time}</h2>
    }
}

Time.contextType = TimeContext
export default Time