import React, { Component } from 'react';
export default class Player extends Component {
    render(){
        const src = this.props.src || ''
        return (
            <video src={src} className="video-player" controls={true} autoPlay={true} />
        )
    }
}