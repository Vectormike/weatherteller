import React from 'react'
import './Weather.scss';

const Weather = ({icon, weather, degree, country, city, description}) => {
    return (
        <div>
            <img src={`http://openweathermap.org/img/w/${icon}.png`} alt={`Weather Icon`}/>
            <p>{weather}</p>
            <p>{degree} in {city}, {country}</p>
            <p>{description}</p>
        </div>
    )
}

export default Weather;