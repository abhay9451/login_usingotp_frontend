import React from 'react'
import {Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import {toast} from "react-toastify";
// functions
import { logout } from '../api/user';

const Header = () => {
    const navigate = useNavigate();

    const handleLogout = (e) => {
        e.preventDefault();

        logout().then((res) => {
            toast.success(res.message);
            navigate("/login", { push: true });
        }).catch((err) => console.error(err));
    };
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary ">
           
            <Link className='navbar-brand ' to="/">Home</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link className='nav-link' to="/signup">Sign Up</Link>
                    </li>
                    <li className="nav-item">
                        
                        <Link className='nav-link' to="/login">Log in</Link>
                    </li>

                    <li className="nav-item">
                    <span className='nav-link' style={{cursor: "pointer"}}
                    onClick={handleLogout}>Logout</span>
                    </li>
                    
                    
                </ul>
            </div>
        </nav>
    )
}

export default Header
