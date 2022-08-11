import React, { useEffect, useState } from 'react'
import axios from "../api/axios";

function Row({title, fetchUrl, id, isLargeRow}) {
  const [movies, setMovies] = useState([]);

  const fetchMovieData = async() => {
    const request = await axios.get(fetchUrl)
    setMovies(request.data.results);
    console.log(request.data.results)
  }


  useEffect(()=>{
    fetchMovieData();
  }, [])


  return (
    <section className="row">
      <h2>{title}</h2>
      <div className="slider">
        <div className="slider__arrow-left">
          <span className="arrow">{"<"}</span>
        </div>

        <div id={id} className="row__posters">
          {movies.map((movie)=>{<>
            <img
              key={movie.id}
              className={`row__poster ${isLargeRow && "row__posterLarge"}`}
              src={`https://image.tmdb.org/t/p/original/movie.poster_path`}
              loading="lazy"
              alt = {movie.name}
            />
            <span>{movie.title}</span></>
          })}
        </div>

        <div className="slider__arrow-right">
          <span className="arrow">{">"}</span>
        </div>
      </div>
    </section>
  )
}

export default Row