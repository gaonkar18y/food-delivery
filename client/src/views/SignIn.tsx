import React from 'react';
import { useDispatch } from 'react-redux';

import { login } from '../store/auth/auth';

const SignIn: React.FC<{}> = ()=>{

    const dispatch = useDispatch();

    const handleOnClick = ()=>{
        dispatch(login({firstName: "Yogesh", lastName: "Gaonkar", email:"test@gmail.com"}));
    }

    return <div>
        <input type="text" placeholder="enter email"/>
        <input type="password" placeholder="enter password"/>
        <button onClick={handleOnClick}>Sign in</button>
    </div>
}

export default SignIn;