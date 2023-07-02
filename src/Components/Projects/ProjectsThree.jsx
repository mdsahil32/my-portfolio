import React from 'react';
import img1 from '../../assets/SportWebPageImg/Screenshot3.png'
import img2 from '../../assets/SportWebPageImg/Screenshot1.png'
import img3 from '../../assets/SportWebPageImg/Screenshot2.png'

const ProjectsThree = () => {
    return (
        <div className='grid md:grid-cols-2 mx-auto p-6 space-x-5 mt-12'>

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
                <h3 className='mb-3'>
                    <span className='uppercase text-blue-500 text-xl pe-4 font-bold'>
                        Sport Academy
                    </span>
                </h3>
                <a className='hover:text-blue-500 font-semibold' href="https://sports-academy-f0a5a.web.app/">Live Site </a>||
                <a className='mx-2 hover:text-blue-500 font-semibold' href="https://github.com/programming-hero-web-course1/b712-summer-camp-client-side-mdsahil32">Client Code </a>||
                <a className='hover:text-blue-500 font-semibold' href="https://github.com/programming-hero-web-course1/b7a12-summer-camp-server_side-mdsahil32"> Server Code</a>

                <br />
                <p className='mt-3'>
                    Sports Academy is a Full-Stack Website with a Mobile Responsive. This webpage have Student dashboard, Instructor dashboard & Admin dashboard. They All have Different type of page. Student can buy any classes. Instructor can Added any classes. Admin control dashboard like Admin can do any Student to Instructor, or Instructor to Admin.

                </p>
                <p className='mt-4'>
                    Demo Admin Email: <span className='font-semibold'>ro@gmail.com</span>
                    <br />
                    Password: <span className='font-semibold'>12!@asAS</span>
                    <br />
                    User Email: <span className='font-semibold'>demo@ga.com</span>
                    <br />
                    Password: <span className='font-semibold'>12!@asAS</span>
                </p>
            </div>
        </div>
    );
};

export default ProjectsThree;