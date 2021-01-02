import axios from "axios";

const GetYoutube = async (serchText) => {
  const URL = `https://www.googleapis.com/youtube/v3/search`;
  const API_KEY = "AIzaSyBVoVuCh0rFVpS7Qd--jDYNZeTZMiHKnu0";
  const Search_Text = serchText;

  try {
    let searchParam = `${URL}?part=snippet&maxResults=5&q=${Search_Text}&key=${API_KEY}`;

    let items = axios.get(searchParam);

    return items;
  } catch (error) {
    console.log(`Error : api/youtube/GetYoutube ${error}`);
  }
};

export default GetYoutube;
