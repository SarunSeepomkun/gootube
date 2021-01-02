import React, { useState } from "react";
import "./App.css";
import VideoContext from "./contexts/VideoContext";
import Video from "./components/Video";
import Searchbar from "./components/Searchbar";
import Videolist from "./components/Videolist";

function App() {

  const [ videoList , setVideoList ] = useState([]);
  const [ videoSelected , setVideoSelected ] = useState();

  return (
    <div className="container">
      iPeach Tube
      <VideoContext.Provider value={{ videoList , setVideoList , videoSelected , setVideoSelected }} >
      <Searchbar className="searchBar" />
      <Video />
      <Videolist />
      </VideoContext.Provider>
    </div>
  );
}

export default App;
