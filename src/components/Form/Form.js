import React from 'react';

const Form = ({onInputChange, onButtonSubmit}) => {
    return (
        <div className="pa3">
            <div style={{
                backgroundColor: '#EA9984'

            }} 
            className="shadow-5 bg-gray mw7 center pa4 br3">
                <fieldset className="cf bn ma0 pa0">
                    <div className="cf">
                        <input 
                            className="f6 bn fl black-80 bg-light-gray pa3 w-80-l br2"
                            type='text' 
                            name='city' 
                            placeholder='City or Country'
                            onChange={onInputChange}
                        />
                        <button 
                        className="dim f6 fl pv3 tc bn bg-near-black white w-20-l br2"
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
