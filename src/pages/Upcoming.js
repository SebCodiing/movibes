import "./Upcoming.scss";
import SearchForm from "../components/SearchForm";
import HorizontalList from "../components/HorizontalList";

const upcomingURL = "https://api.themoviedb.org/3/movie/upcoming?api_key=3a4fcefe46f3db1f6864e930d246d190"

const Upcoming = () => {
    return ( 
        <main>
        <div>
        <SearchForm />
        <HorizontalList url={upcomingURL} headline="Upcoming" all/>
        </div>
        </main>
     );
}
 
export default Upcoming;