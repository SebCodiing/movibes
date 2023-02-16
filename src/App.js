import "./App.css"
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Header from "./templates/Header";
import Footer from "./templates/Footer";

function App() {
  const location = useLocation();
  console.log(location)
  return (
    <>
    <div className={ location.pathname === "/logout" || location.pathname === "/signup" ? "flex" : "grid"}>
      { location.pathname !== "/logout" && location.pathname !== "/signup" ? <Header /> : null}
      <Outlet />
      { location.pathname !== "/logout" && location.pathname !== "/signup" ? <Footer /> : null}
    </div>
    </>
  );
}

export default App;
