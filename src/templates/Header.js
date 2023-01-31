import "./Header.scss";
import Navigation from "./Navigation";
import Playing from "../components/Playing";
import Logout from "../components/Logout";

const Header = () => {
  return (
    <header className="header">
      <div>
          <h1 className="logo">Movibes</h1>
      </div>
      <Navigation />
      <Playing />
      <Logout />
    </header>
  );
};

export default Header;
