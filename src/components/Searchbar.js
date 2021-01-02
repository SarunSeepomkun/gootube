import React, { useContext, useRef, useEffect } from "react";
import GetYoutube from "../api/youtube";
import VideoContext from "../contexts/VideoContext";
import "./Searchbar.css";

function Searchbar() {
  const { setVideoList } = useContext(VideoContext);
  const searchRef = useRef();

  const onEnter = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleSearch = async () => {
    try {
      const {
        data: { items },
      } = await GetYoutube(searchRef.current.value);

      setVideoList(items);
      // setSelectedVideo(items[0]);
    } catch (error) {
      console.log(`Error : ${error}`);
    }
  };

  useEffect(() => {
    handleSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container-searchbar">
      <input
        type="text"
        placeholder="Search..."
        ref={searchRef}
        onKeyPress={onEnter}
        className="search-input"
      />
      <button onClick={()=> handleSearch} className="search-btn">
        Search
      </button>
    </div>
  );
}

export default Searchbar;
