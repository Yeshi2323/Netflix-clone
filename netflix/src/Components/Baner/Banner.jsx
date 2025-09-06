import React, { useEffect, useState } from "react";
import "./banner.css";
import axios from "../../utils/Axios.jsx";
import requests from "../../utils/Requests";
const Banner = () => {
  const [movie, setMovie] = useState({});
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      console.log(request);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="bannerContents">
        <h1 className="bannerTitle">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="bannerButton">
          <button className="bannerButton play">Play</button>
          <button className="bannerButton ban2">My List</button>
        </div>
        <h1 className="bannerDescription">{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className="bannerFadeBottom"></div>
    </div>
  );
};

export default Banner;
