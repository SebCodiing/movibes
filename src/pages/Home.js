import "./Home.scss";
import "../global.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { AiFillStar } from "react-icons/ai";

const apiURL = "https://api.themoviedb.org/3/movie/popular?api_key=3a4fcefe46f3db1f6864e930d246d190"

const Home = () => {
    const [movies, setMovies] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios(apiURL)
        .then(response => setMovies(response.data.results))
        .finally(() => setLoading (false))
    }, []);

    movies && console.log(movies)
    return loading ? <p>Loading</p> : (
        <main>
        <div>
            <img className="heroImg" src={`http://image.tmdb.org/t/p/original/Aqldsq65Nj1KAkQD2MzkZsAk5N5.jpg`} alt="" />

            <section className="upcomingMovies">
                <p>Upcoming</p>
            </section> 
            <section className="movieSection">
            <p>Trending</p>
                <div className="movieGrid">
                {movies.map((movie, index) => { if(index < 4) return (
                    <article className="movieContainer">              
                    <div className="movieRating">
                    <AiFillStar className="star"> </AiFillStar>
                    <p className="rating"> {`${movie.vote_average}`} </p>
                    </div>
                    <img className="movieImg" src={`http://image.tmdb.org/t/p/original${movie.poster_path}`} alt="" key={movie.id} />
                    </article>
                )})}
                </div>  
                </section>
                </div>
                </main>
    )
        
    

};

 
export default Home;
