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
            <Link to="/add-product" className="app-header-list-link">Add Product</Link>
        </div>
    </div>)
}

export default Header;