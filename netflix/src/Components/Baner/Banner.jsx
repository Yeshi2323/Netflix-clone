import React, { useEffect, useState } from "react";
import "./banner.css";
import axios from "../../utils/Axios.jsx";
import requests from "../../utils/Requests";
const Banner = () => {
  const [movie, setMovie] = useState({});
  useEffect(() => {
    async () => {
      try {
        const requs = await axios.get(requests.fetchNetflixOriginals);
        console.log(requs);
        setMovie(
          requs.data.results[
            Math.floor(Math.random() * requs.data.results.length)
          ]
        );
      } catch (error) {
        console.log("error", error);
      }
    };
  }, []);
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://image.//image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="bannerContents">
        <h1 className="bannerTitle">
          {movie?.title || movie?.name || movie?.originalName}
        </h1>
        <div className="bannerButton">
          <button className="bannerButton play">Play</button>
          <button className="bannerButton">My List</button>
        </div>
        <h1 className="bannerDescription">{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className="bannerFadeBottom"></div>
    </div>
  );
};

export default Banner;
