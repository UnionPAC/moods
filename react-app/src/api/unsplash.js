import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: `Client-ID 7Hmi26KLriJJ6KtrNctaj8AtkVHwKj9bmcPA72iqHXY`,
  },
});
