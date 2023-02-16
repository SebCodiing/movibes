import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
const Search = () => {

    const [params] = useSearchParams();
    const query = params.get("query")

    const [movies, setMovies] = useState();
    const [people, setPeople] = useState();
    const [tvSeries, setTvSeries] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios(`https://api.themoviedb.org/3/search/multi?api_key=3a4fcefe46f3db1f6864e930d246d190&query=${query}`)
        .then(response => {
            console.log(response.data.results);
            setMovies(
                response.data.results.filter(result => result.media_type === "movie")
            );
            setPeople(
                response.data.results.filter(result => result.media_type === "person")
            );
            setTvSeries(
                response.data.results.filter(result => result.media_type === "tv")
            );
        })
        .catch(() => setError("Something went wrong!"))
        .finally(() => setLoading(false));
    }, []);

    return loading ? <p>Loading...</p> : (
        <>
        {movies.length && (
            <section>
                <h1>Movies...</h1>
                {movies.map((movie) => (
                    <h2>{movie.title}</h2>
                ))}
                <MoviesSection />
            </section>
        )}
        {people.length && (
            <section>
                <h1>People...</h1>
                {people.map((person) => (
                    <h2>{person.name}</h2>
                ))}
            </section>
        )}
        {tvSeries.length && (
            <section>
                <h1>TV Series...</h1>
                {tvSeries.map((tv) => (
                    <h2>{tv.title}</h2>
                ))}
            </section>
        )}
        </>
    );
};
 
export default Search;