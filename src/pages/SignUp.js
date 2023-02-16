import "./Logout.scss"
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const SignUp = () => {

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate("/")
    }

    const location = useLocation();
    return ( 
        <>
        <section className="column">
             <h1 className={ location.pathname === "/signup" ? "logo logo__position" : "logo"}>Movibes</h1>
             <img className="previewMovie" src={`http://image.tmdb.org/t/p/original/sv1xJUazXeYqALzczSZ3O6nkH75.jpg`} alt="" />
             <div className="previewMovietext">
            <h1>Benefits of your free IMDb account</h1>

            <p>Personalized Recommendations</p>
            <p>Discover shows you'll love.</p>

            <p>Your Ratings</p>
            <p>Rate and remember everything you've seen.</p>
            
            <p>Contribute to IMDb</p>
            <p>Add data that will be seen by millions of people and get cool badges.</p>
            </div>
            </section>
        <section className="column">

            <div className="loginCentered">
                <h1>Create an account</h1>
                <p>Let's get started with your 30 days free trial.</p>
            
            <form className="createaccountForm" onSubmit={handleSubmit} >
                <input type="name" id="name" placeholder="Name" required/>
                <input type="email" name="email" id="email" placeholder="Email" required/>
                <input type="password" name="password" id="password" placeholder="Password" required />

                <button className="createaccountBtn">
                    Create account
                </button>

                <button className="googleBtn">
                <FcGoogle />
                <p><Link to="#">Log in with Google</Link> </p>
                </button>
                <p>Already have an account?  <Link to="/logout">Log in</Link> </p>
            </form>
        </div>
        </section> 
        </>
    );
}
 
export default SignUp;