import React from 'react'
import img1 from '../../assets/ChefWebPageImg/Screenshot1.png'
import img2 from '../../assets/ChefWebPageImg/Screenshot2.png'
import img3 from '../../assets/ChefWebPageImg/Screenshot3.png'

const ProjectOne = () => {

  return (
    <div className='grid md:grid-cols-2 mx-auto p-6 space-x-5 mt-6'>

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
        <h3 className='mb-2'>
          <span className='uppercase text-xl font-bold'>
            Grand master <span className='text-orange-500 pr-4'>chef</span>
          </span>
        </h3>
        <a className='hover:text-orange-500 font-semibold' href="https://grand-master-chef.web.app/country/0">Live Site </a>||
        <a className='mx-2 hover:text-orange-500 font-semibold' href="https://github.com/programming-hero-web-course-4/b7a10-chef-recipe-hunter-client-side-mdsahil32">Client Code </a>||
        <a className='hover:text-orange-500 font-semibold' href="https://github.com/programming-hero-web-course-4/b7a10-chef-recipe-hunter-server-side-mdsahil32"> Server Code</a>
        <br />

        <p className='mt-4'>
          This is master chef website. user can selected chef. also user can see some country chefs. you select any country see this country chefs. you can see more details about chef & some chef recipe. This website have Blog page. This page have some Question Answer.
        </p>
        <p className='mt-4'>
          Demo Email: <span className='font-semibold'>demo@ga.com</span>
          <br />
          Password: <span className='font-semibold'>121212</span>
        </p>
      </div>
    </div>
  )
};

export default ProjectOne;