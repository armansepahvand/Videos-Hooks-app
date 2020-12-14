import React from 'react';
import VideoItem from './VideoItem';


//component to populate a list of VideoItems and pass onVideoSelect and video prop to the VideoItems componenet
const VideoList = ({videos, onVideoSelect}) =>{
    const renderedList= videos.map((video) => {
        return<VideoItem key={video.id.videoId} onVideoSelect= {onVideoSelect} video={video}/>

    })

return <div className="ui relaxed divided list"> {renderedList} </div>
}

export default VideoList;