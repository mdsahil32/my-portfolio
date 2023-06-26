import React from 'react';
import contact from '../../public/contact.json'
import Lottie from 'lottie-react'
import Swal from 'sweetalert2';

const Contact = () => {

    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const comment = form.comment.value;
        const data = { name, email, comment }
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'submitted',
            showConfirmButton: false,
            timer: 1500
        });
    }

    return (
        <div className='my-24'>

            <div className='md:flex max-w-screen-lg mx-auto justify-center items-center'>

                <div className=''>
                    <Lottie animationData={contact}></Lottie>
                </div>
                <div className="hero bg-gray-200  py-4">
                    <div className="hero-content ">
                        <form onSubmit={handleSubmit} className="card w-full max-w-sm ">
                            <div className="card-body ">
                                <h1 className='uppercase text-3xl font-semibold text-center  border-b-4 my-2  border-[#05425E] text-[#05425E]'>Contact Us</h1>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input required type="text" placeholder="name" name='name' className="input input-bordered w-72" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input required type="email" placeholder="email" name='email' className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <textarea required className='border p-2 rounded-lg' placeholder='comment' name="comment" id="" cols="20" rows="6"></textarea>
                                </div>
                            </div>
                            <div className="form-control mt-2 mx-auto">
                                <button className="btn  bg-[#05425E] text-white">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;