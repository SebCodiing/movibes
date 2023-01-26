import "./Header.scss";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className="header">
      <div>
          <h1 className="logo">Movibes</h1>
      </div>
      <Navigation />
    </header>
  );
};

export default Header;
