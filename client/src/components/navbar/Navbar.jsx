import './navbar.css';
import {Link} from "react-router-dom"
import { useContext } from 'react';
import { AuthContext } from '../../utilities/AuthContext';

const Navbar = ()=> {
    const { user } = useContext(AuthContext);
    return (
        <div className='navbar'>
            <div className="navContainer">
                <Link to="/" style={{color:"inherit", textDecoration:"none"}}>
                    <span className="logo">Hotel Booking</span>
                </Link>
                {user ? user.username : (<div className="navItems">
                    <button className="navButton" > <a href="/register">Register</a> </button>
                    <button className="navButton"> <a href="/login">Login</a></button>
                </div>)}
            </div>
        </div>
    )
}

export default Navbar;