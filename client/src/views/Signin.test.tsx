import React from 'react';
import { Provider } from 'react-redux';
import  { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import store from '../store/store';

import SignIn from './SignIn';

describe("SingIn tests",()=>{

    it("displays email and password input",()=>{
        const { getByTestId } = render(<Provider store={store}>
            <SignIn/>
        </Provider>);
        expect(getByTestId("signin-email-input")).toBeVisible();
        expect(getByTestId("signin-pass-input")).toBeVisible();
    });

    it("can login using username and password",async ()=>{
        const { getByText } = render(<Provider store={store}>
            <SignIn/>
        </Provider>);

        await userEvent.click(getByText("Sign in"));

        expect(store.getState().auth.isLoggedIn).toEqual(true);
       
    })
   
});