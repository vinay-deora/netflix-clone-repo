import React, { useEffect, useState } from "react";
import "./Home.scss";
import axios from "axios";
import { BiPlay } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";

const apiKey = "6292a1bdc9f535df7577fba39a8e987c";
const url = "https://api.themoviedb.org/3";
const imgUrl = "https://image.tmdb.org/t/p/original";
const upcoming = "upcoming";
const top_Rated = "top_rated";
const popular_movies = "popular";
const nowplaying = "now_playing";

const Card = ({ img }) => <img className="card" src={img} alt="" />;

const Row = ({ title, arr = [] }) => (
  <div className="Row">
    <h2>{title}</h2>

    <div>
      {arr.map((item, index) => (
        <Card key={index} img={`${imgUrl}/${item.poster_path}`} />
      ))}
    </div>
  </div>
);
const Home = () => {
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [top_popular, set_Top_popular_Movies] = useState([]);
  const [now_playing, set_now_playing] = useState([]);


  useEffect(() => {
    const fetchUpcoming = async () => {
  
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${upcoming}?api_key=${apiKey}`);
      setUpcomingMovies(results);
      console.log(results);
    };
    const topRated = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${top_Rated}?api_key=${apiKey}`);
      setTopRatedMovies(results);
    };
    const popular = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${popular_movies}?api_key=${apiKey}`);
      set_Top_popular_Movies(results);
    };

    const now_playing = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${nowplaying}?api_key=${apiKey}`);
      set_now_playing(results);
    };


    fetchUpcoming();
    topRated();
    popular();
    now_playing();
  }, []);
  return (
    <section className="home">
      <div
        className="banner"
        style={{
          backgroundImage: top_popular[17]
            ? `url(${`${imgUrl}/${top_popular[17].poster_path}`})`
            : "rgb(16, 16, 16)",
        }}
      >
        {top_popular[17] && <h1>{top_popular[17].original_title}</h1>}
        {top_popular[17] && <p>{top_popular[17].overview}</p>}

        <div>
          <button>
            {" "}
            <BiPlay />
            Play
          </button>
          <button>
            {" "}
            List <AiOutlinePlus />
          </button>
        </div>
      </div>

      <Row title={"Upcoming Movies"} arr={upcomingMovies} />
      <Row title={"Top Rated Movies"} arr={topRatedMovies} />
      <Row title={" Top popular Movies"} arr={top_popular} />
      <Row title={"Now playing Movies"} arr={now_playing} />
      {/* <Row title={"Now playing Movies"} arr={getGenre} /> */}
    </section>
  );
};

export default Home;
// trending :- https://api.themoviedb.org/3/trending/all/day?api_key=6292a1bdc9f535df7577fba39a8e987c&language=en-US&page=1
// popular:- https://api.themoviedb.org/3/movie/popular?api_key=6292a1bdc9f535df7577fba39a8e987c&language=en-US&page=1
