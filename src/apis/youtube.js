import axios from "axios";

const KEY = "AIzaSyCNMwC1P46O327bZ0hd1bbyQu1XTFNbJvg";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        type: "video",
        maxResults: "5",
        key: KEY,
    },
});
