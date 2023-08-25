import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget } = useContext(AppContext);
    return (
        <div className='alert alert-secondary'>
            <span>
                Budget: £
                <input
                    required='required'
                    type='number'
                    pattern = "[0-9]*"
                    id='budget'
                    value={budget}
                    style={{ marginLeft: '2rem' , size: 10}}
                >
                </input>
            </span>
        </div>
    );
};
export default Budget;
