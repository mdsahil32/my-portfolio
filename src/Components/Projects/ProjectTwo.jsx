import React from 'react';
import img1 from '../../assets/ToyWebPageImg/Screenshot1.png'
import img2 from '../../assets/ToyWebPageImg/Screenshot2.png'
import img3 from '../../assets/ToyWebPageImg/Screenshot3.png'

const ProjectTwo = () => {
    return (
        <div className='grid md:grid-cols-2 mx-auto p-6 space-x-5 mt-12'>


            <div className='border-r-4 pe-4'>
                <h3 className='mb-3'>
                    <span className='uppercase font-mono text-blue-900 pe-4 text-2xl font-bold '>
                        Kid hero toys
                    </span>
                </h3>
                <a className='hover:text-blue-800 font-semibold' href="https://action-hero-toys.web.app/">Live Site </a>||
                <a className='mx-2 hover:text-blue-800 font-semibold' href="https://github.com/programming-hero-web-course-4/b7a11-toy-marketplace-client-side-mdsahil32">Client Code </a>||
                <a className='hover:text-blue-800 font-semibold' href="https://github.com/programming-hero-web-course-4/b7a11-toy-marketplace-server-side-mdsahil32"> Server Code</a>
                <br />
                <p className='mt-3'>A Mobile Responsive Website. This is a Hero Toys WebPage. webSite have for Kid Toys. you can see some category toys like Marvel, DC & Star Wars. Login User Can Add Toy & see This Toy in my Toys page.</p>
                <p className='mt-4'>
                    Demo Email: <span className='font-semibold'>demo@ga.com</span>
                    <br />
                    Password: <span className='font-semibold'>121212</span>
                </p>
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