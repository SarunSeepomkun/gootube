import React from "react";
import './Video.css';

function Video({ video }) {

    let videoSrc = '';
    if(video)
    {
         videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    }
    else
    {
        videoSrc = '';
    }

  return (
    <div  className="container-video">
      {video ? (
        <iframe
          frameBorder="0"
          className="selected-video"
          title="Video Player"
          src={videoSrc}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default Video;
