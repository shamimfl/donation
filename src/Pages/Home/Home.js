import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/FirebaseConfig/FirebaseConfig';

const Home = () => {


    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const GoogleLogIn=()=>{
        signInWithGoogle()
    }

    if(user){
        console.log(user.user.displayName)
    }

    if(loading){
        return <p>Loading........</p>
    }

    return (
        <div>
            <h1 className='text-primary'>form home</h1>
            <button onClick={GoogleLogIn} className='btn btn-primary'>google log in</button>
        </div>
    );
};

export default Home;