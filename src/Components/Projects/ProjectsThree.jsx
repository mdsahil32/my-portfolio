import React from 'react';
import img1 from '../../assets/SportWebPageImg/Screenshot3.png'
import img2 from '../../assets/SportWebPageImg/Screenshot1.png'
import img3 from '../../assets/SportWebPageImg/Screenshot2.png'

const ProjectsThree = () => {
    return (
        <div className='md:flex mx-auto p-6 space-x-5 mt-12'>

            <div className='bg-gray-200'>
                <div className="h-72 carousel carousel-vertical bg-gray-400 rounded-box ">
                    <div className="carousel-item h-full">
                        <img src={img1} />
                    </div>
                    <div className="carousel-item h-full">
                        <img src={img2} />
                    </div>
                    <div className="carousel-item h-full">
                        <img src={img3} />
                    </div>
                </div>
            </div>
            <div className='border-l-4 ps-4'>
                <h3 >
                    <span className='uppercase text-blue-500 text-xl pe-4 font-bold'>
                        Sport Academy
                    </span>
                    <span >
                        <a className='hover:text-blue-500' href="https://sports-academy-f0a5a.web.app/">Live Site </a>||
                        <a className='mx-2 hover:text-blue-500' href="https://github.com/programming-hero-web-course1/b712-summer-camp-client-side-mdsahil32">Client Code </a>||
                        <a className='hover:text-blue-500' href="https://github.com/programming-hero-web-course1/b7a12-summer-camp-server_side-mdsahil32"> Server Code</a>
                    </span>
                </h3>
                <br />
                <li>  </li>
                <li>  </li>
                <li>  </li>
            </div>
        </div>
    );
};

export default ProjectsThree;