import React from "react";

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
  

  console.log(video);

  return (
    <div  className="selectedVideo">
      {video ? (
        <iframe
          frameBorder="0"
          height="100%"
          width="100%"
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
