import React from 'react';

const Form = ({onInputChange, onButtonSubmit}) => {
    return (
        <div className="pa4">
            <div className="shadow-5 bg-light-blue mw7 center pa4 br2">
                <fieldset className="cf bn ma0 pa0">
                    <div className="cf">
                        <input 
                        className="f6 bn fl black-80 bg-light-gray pa3 lh-solid w-80-l br2"
                        type='text' 
                        name='city' 
                        placeholder='City or Country'
                        onChange={onInputChange}
                        />
                        <button 
                        className="grow f6 f5-l fl pv3 tc bn bg-animate bg-black-70 white w-20-l br2 br--right-ns"
                        type='submit'
                        onClick={onButtonSubmit}
                        > Search
                        </button>
                    </div>
                </fieldset>
            </div>

 


 
            
        </div>
    )
} 

export default Form;
