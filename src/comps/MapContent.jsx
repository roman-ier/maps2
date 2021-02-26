import React from 'react';
import MapHeader from "./MapHeader";
import MapLayers from "./MapLayers";

const MapContent = () => {
    return (
        <div className='mapContent'>
            <MapHeader/>
            <MapLayers/>
            <div id="tooltip">
            </div>
            <div id="modalWindow">
                <div id="modalWindowContent"></div>
                <span id="modalWindowClose">✖</span>
            </div>
        </div>
    );
};

export default MapContent;