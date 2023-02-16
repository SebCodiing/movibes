import axios from "axios";
import { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";

const HorizontalList = ({headline, url, all}) => {
   
        const [movies, setMovies] = useState();
        const [loading, setLoading] = useState(true);
        const [limit] = useState(all ? 20 : 4)
    
        useEffect(() => {
            axios(url)
            .then(response => setMovies(response.data.results))
            .finally(() => setLoading (false))
        }, []);


        return loading ? <p>Loading</p> : ( 
        <section className="movieSection">
            <h2>{headline}</h2>
                <div className="movieGrid">
                {movies.map((movie, index) => { if(index < limit) return (
                    <article className="movieContainer">              
                    <div className="movieRating">
                    <AiFillStar className="star"> </AiFillStar>
                    <p className="rating"> {`${movie.vote_average.toFixed(1)}`}  </p>
                    </div>
                    <img className="movieImg" src={`http://image.tmdb.org/t/p/original${movie.poster_path}`} alt="" key={movie.id} />
                    </article>
                )})}
                </div>  
                </section>



     );
}
 
export default HorizontalList;