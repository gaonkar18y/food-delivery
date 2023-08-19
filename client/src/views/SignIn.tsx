import React from 'react';
import { useMsal } from '@azure/msal-react';

const SignIn: React.FC<{}> = ()=>{

    const { instance } = useMsal();

    const initializeSignIn = () => {
      instance.loginRedirect();
    };

    return <div>
        <button onClick={initializeSignIn}>Sign in</button>
    </div>
}

export default SignIn;