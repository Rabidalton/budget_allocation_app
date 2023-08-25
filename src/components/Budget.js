import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget } = useContext(AppContext);
    const [setBudget] = useState('');

    return (
        <div className='alert alert-secondary'>
            <span>
                Budget: £
                <input
                    required='required'
                    type='number'
                    step='10'
                    min='0'
                    max='20000'
                    pattern = "[0-9]*"
                    id='budget'
                    defaultValue={budget}
                    style={{ marginLeft: '2rem' , size: 10}}
                    onChange={(event) => setBudget((v) => 
                        (event.target.validity.valid ? event.target.value : v))}
                >
                </input>
            </span>
        </div>
        
    );
};
export default Budget;
