import React from 'react';

function VideoMeta(props) {
    return (
        <div className="meta-container">
            <h1>{props.title}</h1>
            <p>{props.subtitle}</p>
            <p>{props.description}</p>
        </div>
    )
}

export default VideoMeta