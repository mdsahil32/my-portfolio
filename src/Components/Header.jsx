import React from 'react';

const Header = () => {
    return (
        <div className="md:fixed z-10 navbar bg-gray-100 border-b-2 ">
            <div className="flex-1 md:ms-8">
                <a href='#home' className="font-bold">Sahil.dev</a>
            </div>
            <div className="flex-none md:me-8 ">
                <ul className="menu menu-horizontal px-1">
                    <li className='hover:border-b-2 border-blue-500'><a href="#about">About</a></li>
                    <li className='hover:border-b-2 border-blue-500'><a href="#projects">Projects</a></li>
                    <li className='hover:border-b-2 border-blue-500'><a href="#skills">Skills</a></li>
                    <li className='hover:border-b-2 border-blue-500'><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;