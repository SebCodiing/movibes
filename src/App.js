import "./App.css"
import { Outlet } from "react-router-dom";
import Header from "./templates/Header";
import Footer from "./templates/Footer";

function App() {
  return (
    <div className="grid">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
