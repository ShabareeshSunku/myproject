import React, { Component } from 'react'
import Player from './Player'
import VideoMeta from './VideoMeta'
import Playlist from './Playlist'
import videos from './videos-mock'
import './videoplayer.css'
export default class VideoPlayer extends Component {
    constructor(props){
        super(props)
        this.state = {
            videos : videos,
            selectedIndex : 9
        }
        //this.playVideo = this.playVideo.bind(this)
    }

    playVideo = (index) => {
        console.log('===>',index)
        this.setState({
            selectedIndex: index
        })
    }
    render(){
        const videos = this.state.videos
        const selectedIndex = this.state.selectedIndex
        return (
            <div className="container">
                <div className="container-left">
                    <Player src={videos[selectedIndex].sources[0]} />
                    <VideoMeta />
                </div>
                <div className="container-right">
                    <Playlist videos={videos} playVideo={this.playVideo}/>
                </div>
            </div>
        )
    }
}
