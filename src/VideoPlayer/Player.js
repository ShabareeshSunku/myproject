import React, { Component } from 'react';
export default class Player extends Component {
    constructor() {
        super()
        this.playerRef = React.createRef()
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        if (this.props.src !== prevProps.src) {
            return this.playerRef.currentTime
        }
        return null
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.src !== prevProps.src) {
            if (snapshot && typeof snapshot === 'number') {
                this.props.saveProgress(snapshot, prevProps.index)
            }
            this.playerRef.currentTime = this.props.progress || 0
            this.playerRef.load()
            this.playerRef.play()
        }
    }
    refInitializer = (ref) => {
        this.playerRef = ref
    }
    render() {
        const src = this.props.src || ''
        return (
            <video
                src={src}
                className="video-player"
                controls={true}
                autoPlay={false}
                ref={this.refInitializer}
            />
        )
    }
}