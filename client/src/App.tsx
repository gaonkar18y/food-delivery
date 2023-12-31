import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { AuthenticatedTemplate, UnauthenticatedTemplate } from '@azure/msal-react';


import { About } from './views/About';
import { Home } from './views/Home';
import Header from './views/header/Header';
import SignIn from './views/SignIn';
import AddProduct from './views/product/AddProductForm';

import store from './store/store';

import './styles/main.css'

const App: React.FC<{}> = ()=>{
    return (
        <>
        <AuthenticatedTemplate>
            <Provider store={store}>
                <Router>
                    <Header />
                    <div id="app-body">
                    <Routes>
                        <Route path="/about" element={<About/>}></Route>
                        <Route path="/add-product" element={<AddProduct/>} />
                        <Route path="/" element={<Home/>}></Route>
                    </Routes>
                    </div>
                    <div id="app-footer">
                        food delivery copy right 
                    </div>
                </Router>
            </Provider>
        </AuthenticatedTemplate>
        <UnauthenticatedTemplate>
            <SignIn />
        </UnauthenticatedTemplate>
        </>
    )
}

export default App;