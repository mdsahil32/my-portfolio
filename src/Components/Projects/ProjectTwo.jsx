import React from 'react';
import img1 from '../../assets/ToyWebPageImg/Screenshot1.png'
import img2 from '../../assets/ToyWebPageImg/Screenshot2.png'
import img3 from '../../assets/ToyWebPageImg/Screenshot3.png'

const ProjectTwo = () => {
    return (
        <div className='md:flex mx-auto p-6 space-x-5 mt-12'>


            <div className='border-r-4 pe-4'>
                <h3 >
                    <span className='uppercase font-mono text-blue-900 pe-4 text-2xl font-bold'>
                        Kid hero toys
                    </span>
                    <span >
                        <a className='hover:text-blue-800' href="https://action-hero-toys.web.app/">Live Site </a>||
                        <a className='mx-2 hover:text-blue-800' href="https://github.com/programming-hero-web-course-4/b7a11-toy-marketplace-client-side-mdsahil32">Client Code </a>||
                        <a className='hover:text-blue-800' href="https://github.com/programming-hero-web-course-4/b7a11-toy-marketplace-server-side-mdsahil32"> Server Code</a>
                    </span>
                </h3>
                <br />
                <li>  </li>
                <li>  </li>
                <li>  </li>
            </div>

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
        </div>
    );
};

export default ProjectTwo;