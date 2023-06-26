import React from 'react';

const Header = () => {
    return (
        <div className="navbar bg-gray-100 border-b-2  max-w-screen-xl mx-auto">
            <div className="flex-1">
                <h1 className="text-xl font-semibold">Mohammed <span className='text-[#068E75]'>Sahil</span></h1>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li className='hover:border-b-2 border-blue-500'><a href="#about">About</a></li>
                    <li className='hover:border-b-2 border-blue-500'><a href="#projects">Projects</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;