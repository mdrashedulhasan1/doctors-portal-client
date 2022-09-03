import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png';
const MakeAppointment = () => {
    return (
        <section style={{background:`url(${appointment})`}} className='flex justify-center items-center px-10'>
            <div className='flex-1 hidden lg:block'>
                <img style={{marginTop: "-100px"}} src={doctor} alt="" />
            </div>
            <div className='flex-1'> 
                <h3 className='text-2xl'>Appointment</h3>
                <h2 className='text-white text-3xl'>Make an Appointment Today</h2>
                <p className='text-white text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, eos, quos omnis quidem laudantium numquam ad sit itaque corrupti iste voluptatum rem alias nostrum incidunt aliquid labore repellendus ea ipsam quaerat quas necessitatibus dignissimos ullam accusantium. Nulla nemo delectus voluptas!</p>
                <button class="btn btn-primary bg-gradient-to-r from-cyan-500 to-blue-500">Get Started</button>
            </div>
        </section>
    );
};

export default MakeAppointment;