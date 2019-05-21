import React, { Component } from 'react'
//import LifeCycleOld from './LifeCycleOld'
import LifeCycleNew from './LifeCycleNew'
function Greeting(props) {
    return <h1 style={{ color: props.color }}>Hello the time is {props.time}</h1>
}


export default class Clock extends Component {
    constructor(props) {
        super(props)
        this.state = {
            time: new Date().toString(),
            loading: true
        }
        this.onChange = this.onChange.bind(this)
        this.onClick = this.onClick.bind(this)
    }
    componentDidMount() {
        //let me = this
        // window.setInterval(function () {
        //     let newTime = new Date().toString()
        //     me.setState({ time: newTime })
        // }, 20000)
    }
    onChange(e) {
        console.log(this)
        console.log(e)
    }
    onClick(e) {
        console.log(e)
    }
    render() {
        let time = this.state.time
        let color = this.props.color
        return (
            <div>
                <Greeting time={time} color={color} />
                <LifeCycleNew time={time} />
                <input type="text" onChange={this.onChange} id='input-elm' onClick={this.onClick} />
            </div>
        )
    }
}