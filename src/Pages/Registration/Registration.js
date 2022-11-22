import React from 'react';
import { Link } from 'react-router-dom';
import Social from '../../Shared/Social/Social';

const Registration = () => {
    return (
        <div className='my-10 p-5 md:flex justify-between items-center'>
            <div className='p-5  md:w-96 w-80 shadow  rounded mx-auto '>
                <div className='flex gap-5 items-center justify-center my-5'>
                    <small>Already have an account?</small>
                    <Link to='/login' className='btn-primary border-2 border-primary bg-white rounded-sm py-1 px-3 font-bold'>Login</Link>
                </div>
                <form>
                    <h1 className='text-center font-bold'>Registration Now</h1>
                    <input type="email" placeholder='Enter Your Email' className='input input-bordered my-3 w-full' />
                    <input type="Password" placeholder='New Password ******' className='input input-bordered my-3 w-full' />
                    <input type="Password" placeholder='Re-type Password ******' className='input input-bordered my-3 w-full' />
                    <input type="submit" className='btn btn-secondary  mt-5 rounded-sm w-full' value='Registration' />
                </form>
                <Social></Social>
            </div>
            <img className='lg:w-1/2 h-[34rem]' src="https://img.freepik.com/free-vector/computer-login-concept-illustration_114360-7962.jpg?w=2000" alt="" />
        </div>
    );
};

export default Registration;