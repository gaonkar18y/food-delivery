import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { AuthenticatedTemplate, UnauthenticatedTemplate } from '@azure/msal-react';
import Select from 'react-select';

import { About } from './views/About';
import { Home } from './views/Home';
import Header from './views/header/Header';
import SignIn from './views/SignIn';
import AddProduct from './views/product/AddProductForm';

import store from './store/store';

import './styles/main.css'
import { IntlProvider } from 'react-intl';

import enMessages from './translations/en.json';
import frMessages from './translations/fr.json';

const messages: Record<string, Record<string, string>> = {
    'en': enMessages,
    'fr': frMessages
}

const App: React.FC<{}> = () => {
    const [locale, setLocale] = useState(navigator.language.split(/[-_]/)[0]);
    return (
        <IntlProvider locale={locale} messages={messages[locale]}>
            <div>
                <Select
                    value={locale}
                    onChange={({ value })=>{
                        setLocale(value);
                    }}
                    options={[
                        {
                            label: 'Eglish', value: 'en'
                        },
                        {
                            label: 'French', value: 'fr'
                        }
                    ]}
                />
                <AuthenticatedTemplate>
                    <Provider store={store}>
                        <Router>
                            <Header />
                            <div id="app-body">
                                <Routes>
                                    <Route path="/about" element={<About />}></Route>
                                    <Route path="/add-product" element={<AddProduct />} />
                                    <Route path="/" element={<Home />}></Route>
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
            </div>

        </IntlProvider>
    )
}

export default App;