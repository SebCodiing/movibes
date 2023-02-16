import "./Footer.scss";
import { useLocation } from "react-router-dom";
import CheckBoxes from "../components/CheckBoxes";
import Notifications from "../components/Notifications";
import User from "../components/User";

const Footer = () => {
    const location = useLocation();
    console.log(location)
    return ( 
        <footer>
            {location.pathname === "/" ? (
                

                <div>
                <Notifications/>
                <User />
                <CheckBoxes />
                </div>


            ) : location.pathname === "/search" ? (
                <p>search footer</p> 
        
        


                
            ) : (
                <p>Alle de andre sider footer</p>
            )}
        </footer>
     );
};

export default Footer 
