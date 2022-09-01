import React from 'react';
import InfoCard from './infoCard';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';
const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
            <InfoCard cardTitle="Opening Hours" bgClass="bg-gradient-to-r from-cyan-500 to-blue-500" img={clock}></InfoCard>
            <InfoCard cardTitle="Our Location" bgClass="bg-orange-400" img={marker}></InfoCard>
            <InfoCard cardTitle="Contact Us" bgClass="bg-gradient-to-r from-cyan-500 to-blue-500" img={phone}></InfoCard>
        </div>
    );
};

export default Info;