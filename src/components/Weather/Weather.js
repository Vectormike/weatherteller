import React from 'react'

const Weather = ({weather, degree, country, city, description}) => {
    return (
        <div>
            <p>{weather}</p>
            <p>{degree} in {city}, {country}</p>
            <p>{description}</p>
        </div>
    )
}

export default Weather;