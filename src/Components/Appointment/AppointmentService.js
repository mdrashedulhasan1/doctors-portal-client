import React from 'react';

const AppointmentService = ({ service, setTreatment }) => {
    const {name, slots} = service;
    return ( 
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title text-primary">{name}</h2>
                <p>{slots.length>0 ? <span>{slots[0]}</span>:<span className='text-red-500'>Try another date</span>}</p>
                <p>{slots.length} {slots.length>1? 'spaces':'space'} available</p>
                <div className="card-actions justify-center">
                <label
                htmlFor="booking-modal" 
                onClick={()=>setTreatment(service)}
                disabled={slots.length===0}
                className="btn btn-primary"
                >Booking Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentService;