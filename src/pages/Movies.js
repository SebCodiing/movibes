import "./Movies.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import SearchForm from "../components/SearchForm";
import HorizontalList from "../components/HorizontalList";
import Notifications from "../components/Notifications";
import User from "../components/User";

const apiURL = "https://api.themoviedb.org/3/movie/popular?api_key=3a4fcefe46f3db1f6864e930d246d190"
const upcomingURL = "https://api.themoviedb.org/3/movie/upcoming?api_key=3a4fcefe46f3db1f6864e930d246d190"
const seriesURL = "https://api.themoviedb.org/3/tv/popular?api_key=3a4fcefe46f3db1f6864e930d246d190"
const trendingURL = "https://api.themoviedb.org/3/trending/movie/week?api_key=3a4fcefe46f3db1f6864e930d246d190"

const monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"
];
const date = new Date()
const month = date.getMonth()

const Movies = ({headline, url}) => {

    const [movies, setMovies] = useState();
        const [loading, setLoading] = useState(true);
    
        useEffect(() => {
            axios(url)
            .then(response => setMovies(response.data.results))
            .finally(() => setLoading (false))
        }, []);

    return ( 
        
        <main>
        <div>
            <SearchForm />
            
            <HorizontalList url={apiURL} headline="Trending" all/>
            <HorizontalList url={upcomingURL} headline="Upcoming"/>
            <HorizontalList url={trendingURL} headline={`Trending this ${monthNames[month]}`}/>
        </div>
        
        </main>
    )
};
 
export default Movies;