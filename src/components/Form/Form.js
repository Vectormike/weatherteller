import React from 'react';

const Form = () => {
    return (
        <div>
            <input type='text' name='city' placeholder='City'/>
            <input type='text' name='country' placeholder='Country'/>
            <button type='submit'>Search</button>
        </div>
    )
} 

export default Form;