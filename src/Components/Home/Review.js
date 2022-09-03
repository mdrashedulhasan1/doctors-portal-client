import React from 'react';

const Review = ({ review }) => {
    return (
        <section>
            <p>{review.review}</p>
            <div className='flex items-center mt-2'>
                <div class="avatar">
                    <div class="rounded-full ring ring-primary ring-offset-base-100">
                        <img src={review.img} alt="" />
                    </div>
                </div>
                <div className='ml-4'>
                    <h2>{review.name}</h2>
                    <p>{review.location}</p>
                </div>
            </div>
        </section>
    );
};

export default Review;