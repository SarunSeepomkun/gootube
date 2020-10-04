import React from "react";

function Videolist({videos}) {

  // console.log(videos);
  
  return (
    <div>
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