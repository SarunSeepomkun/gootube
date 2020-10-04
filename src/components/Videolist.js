import React from "react";
import './Videolist.css';

function Videolist({videos}) {

  // console.log(videos);
  
  return (
    <div className="container-videolist">
      { 
        videos ? videos.map((video , index) => (
        <div key={index}>  
        <p>{video.snippet.title}</p>
        <img alt="thumbnail" src={video.snippet.thumbnails.medium.url} />
        </div>
        ) ) : ''
      }
    </div>
  );
}

export default Videolist;