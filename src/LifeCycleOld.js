import React, { Component } from 'react'

export default class LifeCycleOld extends Component {
    constructor(props) {
        super(props)
        this.state = {}
        console.log('Constructor')
    }
    componentWillMount() {
        console.log('componentWillMount')
    }
    render() {
        console.log('Render Method')
        return <div>LifeCycle Methods Demo</div>
    }
    componentDidMount(){
      console.log('componentDidMount')
    }
    componentWillReceiveProps(nextProps){
      console.log('componentWillReceiveProps', nextProps.time, this.props.time)
    }
    
    shouldComponentUpdate(nextProps, nextState){
      console.log('shouldComponentUpdate', nextProps.time, this.props.time)
      return true
    }
    componentWillUpdate(nextProps, nextState){
      console.log('componentWillUpdate', nextProps.time, this.props.time)
    }
    componentDidUpdate(prevProps, prevState){
      console.log('componentDidUpdate', prevProps.time, this.props.time)
    }
    
    
}
