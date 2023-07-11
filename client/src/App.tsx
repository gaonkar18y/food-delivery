import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';


import { About } from './views/About';
import { Home } from './views/Home';
import Products from './views/Products';
import Header from './views/header/Header';
import SignIn from './views/SignIn';

import store from './store/store';

import './styles/main.css'

const App: React.FC<{}> = ()=>{
    return (
    <Provider store={store}>
    <Router>
        <Header />
        <div id="app-body">
        <Routes>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/products" element={<Products />}></Route>
            <Route path="/signin" element={<SignIn/>} />
            <Route path="/" element={<Home/>}></Route>
        </Routes>
        </div>
        <div id="app-footer">
            food delivery copy right 
        </div>
    </Router>
    </Provider>
    )
}

export default App;