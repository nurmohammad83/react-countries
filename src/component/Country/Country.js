import React from 'react';
import './Country.css';
const Country = (props) => {
    const {name,flags,region,area}=props.country
    return (
        <div className='country'>
            <h2>Country Name: {name.common}</h2>
            <p>Reigon: {region}</p>
            <p>Area: {area}</p>
            <img src={flags.png}alt='flags'/>

        </div>
    );
};

export default Country;