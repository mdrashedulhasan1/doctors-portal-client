import React from 'react';
import quote from '../../assets/icons/quote.svg';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';
import Review from './Review';
const Testimonials = () => {
    const reviews = [
        {
            _id:1,
            name:'Winson Herry',
            img:people1,
            review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ea nihil deleniti.',
            location:'california',
        },
        {
            _id:2,
            name:'Winson Herry',
            img:people2,
            review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ea nihil deleniti.',
            location:'california',
        },
        {
            _id:3,
            name:'Winson Herry',
            img:people3,
            review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ea nihil deleniti.',
            location:'california',
        },
        
    ]
    return (
        <section className='mt-5'>
            <div className='flex justify-between'>
                <div>
                    <h4 className="text-xl text-primary font-bold">Testimonials</h4>
                    <h2 className="text-4xl text-secondary font-xl">What our patients says!</h2>
                </div>
                <div>
                    <img className='w-12 lg:w-24' src={quote} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-3'>
                {
                    reviews.map(review => <Review key={review._id} review={review}></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonials;