import "./SearchForm.scss";
import { IoSearchOutline } from "react-icons/io5";

const SearchForm = () => {
    return ( 
        <div className="searchBar">
            <div className="search_icon"><IoSearchOutline/> </div>
            <input className="searchField"  type="search" name="searchField" id="searchField" placeholder="Search for movies, TV Shows ..." />
        </div>

        // <form action="/search">
        //     <IoSearchOutline/>
        // </form>
     );
}
 
export default SearchForm;