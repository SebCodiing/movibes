import "./Notifications.scss";
import { VscBell } from "react-icons/vsc";

const Notifications = () => {
    return (  
        <div className="notification_btn">
            <div className="notification_icon"><VscBell/> </div>
        </div>
    );
}
 
export default Notifications;