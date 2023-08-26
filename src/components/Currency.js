import React from 'react'

const Currency = () => {

    return (
        <div className='alert alert-success'>
            <span>
                <select className="custom-select" id="inputGroupSelect01">
                    <option defaultValue>Choose...</option>
                    <option value="Dollar" name="dollar">$ Dollar</option>
                    <option value="Pound" name="dollar">£ Pound</option>
                    <option value="Euro" name="euro">€ Euro</option>
                    <option value="Ruppee" name="ruppee">₹ Ruppee</option>
                </select>
            </span>
        </div>
    );
};

export default Currency;