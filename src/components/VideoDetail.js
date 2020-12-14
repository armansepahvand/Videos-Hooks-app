import React from 'react';

//component to get the selected video prop and get the vido title and description and show it on the main page
const VideoDetail = ({video}) => {
    if(!video){
        return <div>Loding..</div>
    }
    const videoSrc= `https://www.youtube.com/embed/${video.id.videoId}`  
return (
    <div>
        <div className="ui embed">
            <iframe title="video player" src={videoSrc}/>
        </div>

        <div className="ui segment">
            <h4 className="ui header"> {video.snippet.title}</h4>
            <p> {video.snippet.description}</p>
        </div>
    </div>)
}


export default VideoDetail;