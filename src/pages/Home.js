import "./Home.scss";
import "../global.scss";
// import { useEffect, useState } from "react";
// import axios from "axios";
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

const Home = () => {
    return (
        <main>
        <div>
            <SearchForm />
            
            <img className="heroImg" src={`http://image.tmdb.org/t/p/original/Aqldsq65Nj1KAkQD2MzkZsAk5N5.jpg`} alt="" />

            <HorizontalList url={apiURL} headline="Trending"/>
            <HorizontalList url={upcomingURL} headline="Upcoming"/>
            <HorizontalList url={seriesURL} headline="TV Series"/>
            <HorizontalList url={trendingURL} headline={`Trending this ${monthNames[month]}`}/>
        </div>
        
        </main>
    )};


export default Home;