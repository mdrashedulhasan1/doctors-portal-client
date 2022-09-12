import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentService from './AppointmentService';
import BookingModal from './BookingModal';

const AvailableAppointment = ({ date }) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <h2 className='text-2xl text-primary text-center'>Available Appointments on: {format(date, 'PP')}</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <AppointmentService
                        key={service._id}
                        setTreatment={setTreatment}
                        service={service}
                    ></AppointmentService>)
                }

            </div>
                {
                    treatment && <BookingModal key={treatment._id} date={date} treatment={treatment} setTreatment={setTreatment}></BookingModal>
                }
        </div>

    );
};

export default AvailableAppointment;