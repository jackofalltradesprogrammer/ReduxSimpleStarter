import React from 'react';

// Whenever REACT dom is rendered, the props are passed as arguments
// for a class component "props" are available as "this.props"
const VideoList = (props) => {
    return  (
        <ul className="col-md-4 list-group">
        {props.videos.length}
        </ul>
    );
};

export default VideoList;