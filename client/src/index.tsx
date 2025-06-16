import ReactDom from 'react-dom';
import React from "react";
import { MsalProvider } from "@azure/msal-react";
import { PublicClientApplication } from "@azure/msal-browser";

import { msalConfig } from './authConfig';
import App from "./App";


const pca = new PublicClientApplication(msalConfig);

const AppWithAuthentication = () => (
    <MsalProvider instance={pca}>
            <App />
    </MsalProvider>
);

ReactDom.render(<AppWithAuthentication />, document.getElementById("root"));