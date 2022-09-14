import React from 'react';
import appointment from '../../assets/images/appointment.png';
const Contact = () => {
    return (
        <div className='p-12 text-center mt-12' style={{background: `url(${appointment})`, backgroundSize: 'cover'}}>
                <h1 className='text-white text-xl mb-2 text-primary'>Contact Us</h1>
                <h2 className='text-white text-4xl mb-12'>Stay Connected With Us</h2>
            <div >
            <div>
                <input type="email" placeholder="email address" className="input input-bordered w-1/2" />
            </div>
            <div className='my-2'>
                <input type="text" placeholder="subject" className="input input-bordered w-1/2" />
            </div>
            <div className="form-control">
                <textarea className="textarea textarea-bordered h-24 w-1/2 mx-auto" placeholder="your massage"></textarea>
            </div>
            <button className="btn btn-primary bg-gradient-to-r from-cyan-500 to-blue-500 mt-4">Get Started</button>
        </div>
        </div>
    );
};

export default Contact;