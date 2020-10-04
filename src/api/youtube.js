import axios from 'axios';

const GetYoutube = async (serchText)=>{

    const URL = `https://www.googleapis.com/youtube/v3/search`;
    const API_KEY = 'AIzaSyDB4Hd9ZOdpN5q6SEAxZ0NJ1yrqLCNytZs';
    const Search_Text = serchText;

    try {
        console.log('youtube.GetYoutube');
        let searchParam = `${URL}?part=snippet&maxResults=5&q=${Search_Text}&key=${API_KEY}`; 

        let items = axios.get(searchParam);
        console.log(searchParam);

        return items;

    } catch (error) {
        return 'line 12 youtube.GetYoutube() , ' + error;
    }

}

export default GetYoutube;