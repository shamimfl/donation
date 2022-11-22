import React from 'react';
import "./MostDoneation.css";
const MostDoneation = () => {
    return (
        <div className='my-3'>
            <h1 className='text-2xl font-semibold text-accent'>Lorem ipsum dolor sit amet.</h1>
            <div className='mt-5'>
                <div className='md:flex'>
                <div className='md:text-left'>
                    <h4 className='text-lg font-semibold text-primary mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, aliquam.</h4>
                    <p className='text-gray-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis magni ratione aliquam sed corporis porro ipsum unde perspiciatis! Praesentium, quaerat?</p>
                </div>
                <img className='md:w-2/4 custom-img' src="https://demo.ovatheme.com/anova/wp-content/uploads/2022/10/donate-06-768x517.jpg" alt="" />
                </div>
            </div>
            <div className='my-5'>
            <div className='md:flex md:flex-row-reverse gap-6'>
                <div className='md:text-left'>
                    <h4 className='text-lg font-semibold text-primary mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, aliquam.</h4>
                    <p className='text-gray-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis magni ratione aliquam sed corporis porro ipsum unde perspiciatis! Praesentium, quaerat?</p>
                </div>
                <img className='md:w-2/4 custom-img' src="https://demo.ovatheme.com/anova/wp-content/uploads/2022/10/donate-06-768x517.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default MostDoneation;