import React from 'react';
import TopButton from "../tamplates/TopButton";

const MapSwitcher = ({mapLevels}) => {

    return (
        <div className='mapSwitcher'>
            <div className="form_radio_group">
                {mapLevels.map((p, i) => {
                    return <TopButton buttonName={p} key={i + p} i={i}/>
                })}
            </div>
        </div>
    );
};

export default MapSwitcher;