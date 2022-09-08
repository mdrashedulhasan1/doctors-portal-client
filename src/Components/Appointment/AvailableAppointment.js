import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentService from './AppointmentService';
import BookingModal from './BookingModal';

const AvailableAppointment = ({ date }) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState({});

    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <h2 className='text-2xl text-primary text-center'>Available Appointments on: {format(date, 'PP')}</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <AppointmentService
                        id={service._id}
                        setTreatment={setTreatment}
                        service={service}
                    ></AppointmentService>)
                }

            </div>
                {
                    treatment && <BookingModal treatment={treatment}></BookingModal>
                }
        </div>

    );
};

export default AvailableAppointment;