import React, { useContext } from "react";
import VideoContext from "../contexts/VideoContext";
import "./Video.css";

function Video() {
  const { videoList, videoSelected } = useContext(VideoContext);

  let videoSrc = "";
  if (videoList.length > 0 && typeof videoSelected === "undefined") {
    videoSrc = `https://www.youtube.com/embed/${videoList[0].id.videoId}`;
  } else if (videoList.length > 0 && typeof videoSelected !== "undefined") {
    videoSrc = `https://www.youtube.com/embed/${videoList[videoSelected].id.videoId}`;
  } else {
    videoSrc = "";
  }
  return (
    <div className="container-video">
      {videoList ? (
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
