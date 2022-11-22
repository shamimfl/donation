import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/FirebaseConfig/FirebaseConfig';

const Dashboard = () => {

    const [user, loading, error] = useAuthState(auth)
    

    if(loading){
        return <p>Loading.......</p>
    }

    if(user){
        console.log(user)
    }

    return (
        <div>
            <img src={user?.photoURL} alt="" />
        </div>
    );
};

export default Dashboard;