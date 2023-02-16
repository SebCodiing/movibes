import "./Detail.scss"
import SearchForm from "../components/SearchForm";
import { Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa";


const Detail = () => {


    return (
        <main>
            <SearchForm />
        <div>
            <img className="heroImg" src={`http://image.tmdb.org/t/p/original/Aqldsq65Nj1KAkQD2MzkZsAk5N5.jpg`} alt="" />
            <Link className="playTrailer">
            <FaPlay className="playIcon" />
            </Link>
            <p>Watch Trailer</p>

            <section className="about">
                <p>The Enforcer </p>
                <p>2022</p>
                <p>1h 30m</p>
                <div className="genrepicker"></div>
            </section>
        </div>
        </main>
    );
}
 
export default Detail;