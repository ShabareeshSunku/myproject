import React, { Component } from 'react';
import TimeContext from './TimeContext'
import Box from './Box'
export default class ContextDemo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            time: new Date().toString()
        }
    }
    componentDidMount() {
        let me = this
        window.setInterval(function () {
            let newTime = new Date().toString()
            me.setState({ time: newTime })
        }, 1000)
    }
    render() {
        return (
            <TimeContext.Provider value={{ time: this.state.time }}>
                <Box />
            </TimeContext.Provider>
        )
    }
}