import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from "../hooks/useVideos";


const App = () => {

  //state for selected videos
  const [selectedVideo, setSelectedVideo] = useState(null);

  //getting videos array and search function from useVideos hook  
  const [videos, search] = useVideos("bulls");

  //set the selected video on the component mount and rerun the hook evrytime vidoes array is updated  
  useEffect(() => {
    console.log("rendered");
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (

    <div className="ui container" style={{ marginTop: "10px" }}>
      
      {/*SearchBar component with a prop that passes the search function to the component*/ }
      <SearchBar onFormSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            {/*VideoDetail component which passes the selected vido as a prop*/}
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">

            {/*VideoList componenet which passes the selected video and list of videos to the component*/}
            <VideoList onVideoSelect={setSelectedVideo} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
