import { Link } from "react-router-dom"
import "../css/Navbar.css";


function NavBar(){


    return <nav className="flex justify-between items-center text-indigo-500 w-full z-10 shadow shadow-black bg-black p-4 fixed ">
        <div className="text-xl">
            <Link to="/">All Movies</Link>
        </div>
        <div className="">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/favourites" className="nav-link">Favourites</Link>
        </div>
    </nav>
}

export default NavBar;