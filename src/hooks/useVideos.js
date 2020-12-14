import { useState, useEffect } from "react";
import youtube from "../apis/youtube";

//cusome Hook to send the API request and store the reponse to the videos array
const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);
  const KEY = "AIzaSyBu9wOVji4MR4mQKOS3ocm_7Yzb9VlrBO4";

  //on the first call on this Hook search for the default term pass the resulted videos to the Videos variable
  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  //function to do the search for the calling component based on the term passed top the prop
  const search = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
        part: "snippet",
        maxResults: 5,
        type: "video",
        key: KEY,
      },
    });

    //save the response items to the Videos state
    setVideos(response.data.items);
  };
  return [videos, search];
};

export default useVideos;
