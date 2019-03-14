import React from 'react';

const Form = ({getWeather}) => {
    return (
        <div>
            <input 
            type='text' 
            name='city' 
            placeholder='City'
            
            />
            <button 
            type='submit'
            onSubmit={getWeather}
            >Search
            </button>
        </div>
    )
} 

export default Form;