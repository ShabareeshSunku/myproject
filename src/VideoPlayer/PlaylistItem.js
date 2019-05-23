import React from 'react';

function PlaylistItem(props) {
    const { video = {}, index, isSelected = false } = props
    // props = {
    //     video : {},
    //     index:1,
    //     isSelected : true
    // }
    // //const video = props.video
    // const {video:newVideo={}} = props
    return (
        <div className={`video-item ${isSelected ? 'video-item-selected' : ''}`} onClick={() => {
            props.playVideo(index)
        }}>
            <div className="thumbnail-container">
                <img
                    src={video.thumb}
                    className="thumbnail"
                    alt=""
                />
            </div>
            <div className="text-container">
                <h2>{video.title}</h2>
                <p className="subtitle">{video.subtitle}</p>
                <p>{video.description}</p>
            </div>
        </div>
    )
}
export default PlaylistItem