import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [open, setOpen] = useState(false);
    return (

        <div className='md:flex justify-between items-center bg-base-100'>

            <div className='flex justify-between items-center w-full  p-5'>
                <Link className='text-2xl font-bold border-b-8 rounded-full border-secondary border-dotted' to='/'><span className='text-secondary'>Orp</span>hanage</Link>
                <div onClick={() => setOpen(!open)} className='md:hidden cursor-pointer'>
                  
                            <div>
                                <div className='bg-black w-5 h-1'></div>
                                <div className='bg-black w-5 h-1 mt-1'></div>
                                <div className='bg-black w-5 h-1 mt-1'></div>
                            </div>
                </div>
            </div>
            <ul className={`md:flex justify-end gap-5 items-center font-bold absolute p-5 md:static bg-base-100 w-full duration-500 ease-in ${open ? 'top-10': 'top-[-120px]'}`}>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/about'>Contact</Link>
                <Link to='/dashboard'>Dashboard</Link>
                <Link className='btn btn-secondary rounded shadow' to='/registration'>Registration</Link>
            </ul>
        </div>
    );
};

export default Header;