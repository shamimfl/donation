import React from 'react';
import { Link } from 'react-router-dom';
// home section about
const About = () => {
    return (
        <div className='md:flex my-2'>
    {/* add all content here with title */}
            <div className='text-left md:w-3/4'>
                <h1 className='font-bold text-4xl mb-3'>Lorem ipsum, dolor sit amet <br /> consectetur adipisicing elit. <br /> Repellat modi provident quidem</h1>
                <p className='mb-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita, animi modi? Corporis rerum voluptas, molestias, odio repellat id minima reiciendis ratione numquam laboriosam, eaque labore iusto provident. Earum, labore. Eveniet!</p>
                {/* link to about section button */}
                <Link to="/about" className="btn btn-outline btn-success">Read More</Link>
            </div>
            <div>
                <img src="https://demo.ovatheme.com/anova/wp-content/uploads/2022/10/home-1-event-a.jpg" alt="" />
            </div>
        </div>
    );
};

export default About;