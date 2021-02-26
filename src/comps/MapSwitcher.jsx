import React from 'react';
import TopButton from "../tamplates/TopButton";

const MapSwitcher = ({mapLevels}) => {

    return (
        <div className='mapSwitcher'>
            <div className="form_radio_group">
                {mapLevels.mapLevelsNames.map((p, i) => {
                    return <TopButton buttonName={p} key={i + p} i={i}
                                      checked={i === mapLevels.mapLevelsSelect}/>
                })}
            </div>
        </div>
    );
};

export default MapSwitcher;