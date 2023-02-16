import "./Logout.scss";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const Logout = () => {

    const location = useLocation();
    return (
        <>
        
        <section className="column">
            <h1 className={ location.pathname === "/logout" ? "logo logo__position" : "logo"}>Movibes</h1>

            <div className="loginCentered">
        
            
            <h1>Welcome back, Sebastian</h1>
            <p className="welcomeback">Welcome back! Please enter your details.</p>
    

            <button className="googleBtn">
                <FcGoogle />
                <p><Link to="#">Log in with Google</Link> </p>
            </button>
        
            <p className="decorated">Or</p>  
            
            <form className="loginForm" action="">
            <input type="email" name="email" id="" placeholder="E-mail" required/>
            <input type="password" name="password" id="" placeholder="Password" required />
            <br />
            <input className="checkbox" type="checkbox" name="" id="" />
            <p>Remember me for 30 days</p>
            <p>Forgot password</p>
            <Link to ="/" >Log in</Link>
            <p>Don't have an account?  <Link to="/signup">Sign up for free</Link> </p>
            </form>
        </div>
</section>
        <section className="column">
        <img className="previewMovie" src={`http://image.tmdb.org/t/p/original/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg`} alt="" />
        <article className="previewMovietext">
        <h1>Avatar: The Way Of Water</h1>
        <p>Movie | 2022</p>
        <p>Genres: Action, Adventure, Fantasy</p>
        </article>
        </section> 
        </>
     );
}
 
export default Logout;
