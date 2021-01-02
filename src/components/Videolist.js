import React, { useContext } from "react";
import "./Videolist.css";
import VideoContext from "../contexts/VideoContext";

function Videolist() {
  const { videoList, setVideoSelected } = useContext(VideoContext);

  return (
    <div className="container-videolist">
      {videoList
        ? videoList.map((video, index) => (
            <div key={index}>
              <p>{video.snippet.title}</p>
              <img
                alt="thumbnail"
                src={video.snippet.thumbnails.medium.url}
                onClick={() => setVideoSelected(index)}
                width={400}
                height={250}
              />
            </div>
          ))
        : ""}
    </div>
  );
}

export default Videolist;
