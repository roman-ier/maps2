import React from 'react';
import PathComp from "../tamplates/PathComp";


const SvgLayers = ({dataStore, colors}) => {
    return (
        <g className="SvgLayers">
            {dataStore.type.map((p, i) => {
                    if (p === 'territory' || p === 'general')
                        return <PathComp
                            key={i + p}
                            d={dataStore.coordinates[i]}
                            fill={colors.fill[p]}
                            stroke={colors.stroke.general}/>
                    else return '';
                }
            )}
        </g>
    );
};

export default SvgLayers;