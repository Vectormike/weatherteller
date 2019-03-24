import React from 'react';

const Form = ({onInputChange, onButtonSubmit}) => {
    return (
        <div className="pa4">
            <div className="shadow-5 bg-light-red mw7 center pa4 br2-ns ba b--black-10">
            <fieldset className="cf bn ma0 pa0">
            <legend class="pa0 f5 f4-ns mb3 black-80">Type in a location</legend>
            <div className="cf">
            <input 
            className="f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns"
            type='text' 
            name='city' 
            placeholder='City or Country'
            onChange={onInputChange}
            />
            <button 
            className="grow f6 f5-l fl pv3 tc bn bg-animate bg-black-70 hover-bg-black white pointer w-100 w-25-m w-20-l br2-ns br--right-ns"
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
