import React, {Component} from 'react'

function Greeting(props){
    return <h1 style={{color : props.color}}>Hello the time is {props.time}</h1>
}
export default class Clock extends Component  {
    constructor(props){
        super(props)
        this.state = {
            time : new Date().toString(),
            loading:true
        }
    }
    componentDidMount(){
        let me = this
      window.setInterval(function(){
          let newTime = new Date().toString()
          me.setState({time : newTime})
      },1000)
    }
    
    render(){
        let time = this.state.time
        let color = this.props.color
        return (
            <Greeting time={time} color={color}/>
        )
    }
}