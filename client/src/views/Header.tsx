import React from 'react';
import { Link } from 'react-router-dom';

const Header = ()=>{
    return (<div id="app-header-container">
        <div id="app-header-nav">
            <Link to="/" className="app-header-list-link">Home</Link>
            <Link to="/about" className="app-header-list-link">About</Link>
            <Link to="/users" className="app-header-list-link">Users</Link>
            <Link to="/products" className="app-header-list-link">Produts</Link>
        </div>
        <div id="app-header-signup-section">
            <Link to="/signup" className="app-header-list-link">Sign up</Link>
            <Link to="/singnin" className="app-header-list-link">Sign In</Link>
        </div>
      
    </div>)
}

export default Header;