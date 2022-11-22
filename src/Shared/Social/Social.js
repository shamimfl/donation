import React from 'react';

const Social = () => {
    return (
        <div>
            <div className=' justify-between mt-10'>
                <button className='btn w-full flex justify-center gap-2 items-center mb-3 border-primary bg-white text-secondary border-2 rounded-sm'>
                    <img className='h-6 w-6' src="https://assets.stickpng.com/images/5847f9cbcef1014c0b5e48c8.png" alt="" />
                    Google +
                </button>
                <button className='btn w-full flex justify-center gap-2 items-center mb-3 border-primary bg-white text-secondary border-2 rounded-sm'>
                    <img className='h-6 w-6' src="https://www.edigitalagency.com.au/wp-content/uploads/Facebook-logo-blue-circle-large-transparent-png.png" alt="" />
                    Facebook
                </button>
            </div>
        </div>
    );
};

export default Social;