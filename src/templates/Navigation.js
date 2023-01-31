import { NavLink } from "react-router-dom";
import "./Navigation.scss";
import { VscHome } from "react-icons/vsc";
import { BsCameraReels } from "react-icons/bs";
import { MdOutlineSmartDisplay } from "react-icons/md";
import { SlCalender } from "react-icons/sl";


const Navigation = () => {
  return (
    <nav className="navbar">
      <NavLink className="navLink" to="/"><div className="nav_icon"><VscHome/></div><p>Home</p></NavLink>
      <NavLink className="navLink" to="/movies"><div className="nav_icon"><BsCameraReels/></div><p>Movies</p></NavLink>
      <NavLink className="navLink" to="/tvseries"><div className="nav_icon"><MdOutlineSmartDisplay/></div><p>TV Series</p></NavLink>
      <NavLink className="navLink" to="/upcoming"><div className="nav_icon"><SlCalender/></div><p>Upcoming</p></NavLink>
    </nav>
  );
};

export default Navigation;
