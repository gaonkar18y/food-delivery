import React from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';

import { About } from './views/About';
import { Home } from './views/Home'
import { Users } from './views/Users'
import Products from './views/Products';
import Header from './views/Header';

import './styles/main.css'

const App: React.FC<{}> = ()=>{
    return (<Router>
        <Header />
        <div id="app-body">
        <Routes>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/users" element={<Users/>}></Route>
            <Route path="/products" element={<Products />}></Route>
            <Route path="/" element={<Home/>}></Route>
        </Routes>
        </div>
        <div id="app-footer">
            food delivery copy right 
        </div>
        
    </Router>)
}

export default App;