import React from 'react'
import img1 from '../assets/ChefWebPageImg/Screenshot1.png'
import img2 from '../assets/ChefWebPageImg/Screenshot2.png'
import img3 from '../assets/ChefWebPageImg/Screenshot3.png'

const ProjectOne = () => {


  return (
    <div className='md:flex mx-auto space-x-5 mt-6'>

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
      <div className='border-l-4 ps-8'>
        <h3 className='uppercase text-xl font-bold'>Grand master <span className='text-orange-500'>chef</span></h3>
      </div>
    </div>
  )
};

export default ProjectOne;