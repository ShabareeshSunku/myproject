import React, { Component } from 'react'

export default class LifeCycleNew extends Component {
    constructor(props) {
        super(props)
        this.state = {}
        console.log('Constructor')
    }
    static getDerivedStateFromProps(nextProps,nextState) {
        console.log('getDerivedStateFromProps')
        return null
    }
    render() {
        console.log('Render Method')
        return <div>LifeCycle Methods Demo</div>
    }
    componentDidMount() {
        console.log('componentDidMount')
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate')
        return null
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate', nextProps.time, this.props.time)
        return true
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate', prevProps.time, this.props.time)
    }

}
