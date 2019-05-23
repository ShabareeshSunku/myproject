import React, { Component } from 'react'
import Player from './Player'
import VideoMeta from './VideoMeta'
import Playlist from './Playlist'
import videos from './videos-mock'
import './videoplayer.css'
export default class VideoPlayer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            videos: videos,
            selectedIndex: 0
        }
        //this.playVideo = this.playVideo.bind(this)
    }

    saveProgress = (progress, index) => {
        const videos = this.state.videos.slice(0)
        videos[index].progress = progress
        this.setState({
            videos: videos
        })
    }
    playVideo = (index) => {
        console.log('===>', index)
        this.setState({
            selectedIndex: index
        })
    }
    render() {
        const videos = this.state.videos
        const selectedIndex = this.state.selectedIndex
        const currVideo = videos[selectedIndex]
        return (
            <div className="container">
                <div className="container-left">
                    <Player
                        src={currVideo.sources[0]}
                        saveProgress={this.saveProgress}
                        index={selectedIndex}
                        progress={currVideo.progress}
                    />
                    <VideoMeta
                        title={currVideo.title}
                        subtitle={currVideo.subtitle}
                        description={currVideo.description}
                    />
                </div>
                <div className="container-right">
                    <Playlist videos={videos} playVideo={this.playVideo} selectedIndex={selectedIndex} />
                </div>
            </div>
        )
    }
}
