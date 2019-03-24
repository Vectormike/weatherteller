import React from 'react'
import './Weather.scss';

const Weather = ({icon, weather, degree, country, city, description}) => {
    
    return (
        <div>
            <img className="icon" src={`http://openweathermap.org/img/w/${icon}.png`} alt={`Weather Icon`}/>
            <div className="res">
                <p>{weather}</p>
                <p>{degree} in {city}, {country}</p>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Weather;