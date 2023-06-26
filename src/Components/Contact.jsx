import React from 'react';
import contact from '../../public/contact.json'
import Lottie from 'lottie-react'

const Contact = () => {
    return (
        <div className='my-12'>
            <h1 className='uppercase text-3xl font-semibold text-center mx-auto border-b-4 w-1/6 border-gray-300 text-[#05425E]'>Contact me</h1>
            <div className='md:flex max-w-screen-lg mx-auto justify-center items-center'>
                <div className='w-1/2'>
                    <Lottie animationData={contact}></Lottie>
                </div>
                <div className="hero  py-4">
                    <div className="hero-content ">
                        <div className="card w-full max-w-sm ">
                            <div className="card-body ">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="name" className="input input-bordered w-72" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    
                                   <textarea className='border p-2 rounded-lg' placeholder='comment' name="" id="" cols="20" rows="6"></textarea>
                                </div>

                            </div>
                            <div className="form-control mt-2 mx-auto">
                                <button className="btn  bg-[#05425E] text-white">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;