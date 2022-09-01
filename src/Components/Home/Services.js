import React from 'react';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';
import treatment from '../../assets/images/treatment.png';
import Service from './Service';
const Services = () => {
    const services = [
        {
            _id:1,
            name:'Fluoride Treatment',
            description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, architecto.',
            img:fluoride,
        },
        {
            _id:2,
            name:'Cavity Filling',
            description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, architecto.',
            img:cavity,
        },
        {
            _id:3,
            name:'Teeth Whitenning',
            description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, architecto.',
            img:whitening,
        },
    ]
    return (
        <div className='my-20'>
            <div className='text-center '>
                <h1 className='text-xl font-bold'>Our Services</h1>
                <h2 className='text-4xl font-bold'>Services We Provide</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    services.map(service => <Service service={service}></Service>)
                }
            </div>
            <div class="hero min-h-screen">
                <div class="hero-content flex-col lg:flex-row">
                    <img src={treatment} class="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 class="text-5xl font-bold">Box Office News!</h1>
                        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button class="btn btn-primary bg-gradient-to-r from-cyan-500 to-blue-500">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;