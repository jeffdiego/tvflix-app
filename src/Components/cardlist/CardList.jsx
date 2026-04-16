import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "../card/Card";

export const CardList = () => {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    try {
      const config = {
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYzJhMWU5NzA1ZmQ5OThlYWRkYjY1ZWY0MzhmZWMyNiIsIm5iZiI6MTc1MjAxODg1NC43MzYsInN1YiI6IjY4NmRhZmE2MjkxMzA3NjU2MzcwM2E1OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rJXlKvSxImiQKdosZS6WivzKR7R064r6k2jvDIYgg5c",
        },
      };

      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
        config
      );

      console.log("filmes:", response.data.results);
      setMovies(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <section className="container mt-5 pt-5">
      <h2 className="section-title">Filmes Populares</h2>

      <div className="row">
        {movies.map((movie) => (
          <Card
            key={movie.id}
            title={movie.title}
            date={movie.release_date}
            image={movie.poster_path}
          />
        ))}
      </div>
    </section>
  );
};
