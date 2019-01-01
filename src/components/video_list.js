import React from 'react';
import VideoListItem from './video_list_item';

// Whenever REACT dom is rendered, the props are passed as arguments
// for a class component "props" are available as "this.props"
const VideoList = (props) => {
    const videoItems = props.videos.map((video) => {
        // Unique key "etag" for each list item so React can render it in an efficient way
        return <VideoListItem key={video.etag} video={video} /> 
    });
    return  (
        <ul className="col-md-4 list-group">
            {videoItems} {/*  React will try to render this array of components */}
        </ul>
    );
};

export default VideoList;