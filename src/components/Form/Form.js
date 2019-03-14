import React from 'react';

const Form = ({onInputChange, onButtonSubmit}) => {
    return (
        <div>
            <input 
            type='text' 
            name='city' 
            placeholder='City'
            onChange={onInputChange}
            />
            <button 
            type='submit'
            onClick={onButtonSubmit}
            >Search
            </button>
        </div>
    )
} 

export default Form;