import React from 'react';

const TopButton = ({buttonName, i, checked}) => {
    const click = (e) => {
        console.log(e.value);
    }
    return (
        <div className="form_radio_group-item">
            <input onClick={(e) => click(e.target)}
                   id={'radio-' + i}
                   type="radio"
                   name="mapType"
                   value={'mo' + i}
                   checked={checked}
            />
            <label htmlFor={'radio-' + i}>{buttonName}</label>
        </div>
    );
};

export default TopButton;