import React, { useState ,useEffect } from "react";
import "./App.css";
import GetYoutube from "./api/youtube";
import Video from "./components/Video";
import Searchbar from "./components/Searchbar";
import Videolist from "./components/Videolist";

function App() {
  // const [serchText, setSearchText] = useState("");
  const [videoList, setVideoList] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleSearch = async (serchText) => {
    console.log('App.handleSearch');
    const {
      data: { items },
    } = await GetYoutube(serchText);

    setVideoList(items);
    setSelectedVideo(items[0]);
  };

  useEffect(()=>{
    handleSearch();
  },[]);

  return (
    <div className="container">
      GooTube
      <Searchbar className="searchBar" onSubmit={handleSearch}  />
      <Video video={selectedVideo} />
      <Videolist videos={videoList} />
    </div>
  );
}

export default App;
