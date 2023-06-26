import React from 'react';
import plus from '../../public/plus.json'
import Lottie from 'lottie-react'
const About = () => {
    return (
        <div id='about' className='grid grid-cols-1 md:grid-cols-2 mx-auto justify-center items-center max-w-screen-lg	'>
            <div>
                <Lottie animationData={plus}></Lottie>
            </div>
            <div>
                <h1 className='text-3xl font-semibold text-[#4A90E2] uppercase underline my-2'>About Me</h1>
                <p className='text-gray-400'>I am a passionate Front-end Developer with expertise in HTML, CSS, Bootstrap, Tailwind CSS, and various frameworks. As a junior Front-end Developer, I have a strong grasp of Stripe, JWT, Node.js, Express.js, MongoDB, and other robust tools. This allows me to develop seamless and efficient web applications for an enhanced user experience. I stay up-to-date with the latest industry trends by exploring cutting-edge technologies like Shadchan UI,  Next.js. By continuously expanding my skill set, I ensure I can deliver innovative solutions.</p>
            </div>
        </div>
    );
};

export default About;