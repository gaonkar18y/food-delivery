import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { AuthState } from '../../store/auth';

const Header = ()=>{

    const auth: AuthState = useSelector((state: RootState)=> state.auth);

    return (<div id="app-header-container">
        <div id="app-header-nav">
            <Link to="/" className="app-header-list-link">Home</Link>
            <Link to="/about" className="app-header-list-link">About</Link>
            <Link to="/products" className="app-header-list-link">Produts</Link>
        </div>
        {
            auth.isLoggedIn ? <div>Welcome {auth.user.firstName}</div>:<div id="app-header-signup-section">
                <Link to="/signup" className="app-header-list-link">Sign up</Link>
                <Link to="/signin" className="app-header-list-link">Sign In</Link>
            </div>
        }
    </div>)
}

export default Header;