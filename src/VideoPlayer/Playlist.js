import React from 'react';
import PlayListItem from './PlaylistItem'
function PlayList(props) {
    const videos = props.videos || []
    const playVideo = props.playVideo
    return (
        <div>
            {
                videos.map((video, index) => (
                    <PlayListItem
                        video={video}
                        key={'' + index}
                        index={index}
                        playVideo={playVideo}
                    />
                ))
            }
        </div>
    )
}
export default PlayList;