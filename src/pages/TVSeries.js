import "./TVSeries.scss";
import SearchForm from "../components/SearchForm";
import HorizontalList from "../components/HorizontalList";
import CheckBoxes from "../components/CheckBoxes";

const seriesURL = "https://api.themoviedb.org/3/tv/popular?api_key=3a4fcefe46f3db1f6864e930d246d190"

const TVSeries = () => {
    return ( 
        <main>
        <div>
        <SearchForm />
        <HorizontalList url={seriesURL} headline="TV Series" all/>
        </div>
        </main>
     );
};
 
export default TVSeries;
