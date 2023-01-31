import { NavLink } from "react-router-dom";
import { TbLogout } from "react-icons/tb";

const Logout = () => {
    return ( 
        <nav>
            <NavLink className="navLink" to="/logout"><div className="nav_icon"><TbLogout/></div><p>Log out</p></NavLink>
        </nav>
     );
}
 
export default Logout;