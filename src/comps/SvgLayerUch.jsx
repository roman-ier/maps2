import React from 'react';
import Text from "../tamplates/Text";
import PathComp from "../tamplates/PathComp";

const SvgLayerUch = ({dataStore, colors}) => {
    return (
        <g className="SvgAreaNumber">
            {dataStore.type.map((p, i) => {
                    if (p === 'uch')
                        return <>
                            <Text key={i} x={dataStore.dotCoordinates[i]} body={dataStore.number[i]}/>
                            <PathComp
                                key={i + p}
                                d={dataStore.coordinates[i]}
                                fill={colors.fill.green}
                                stroke={colors.stroke.general}/>
                        </>
                    else return '';
                }
            )}
        </g>
    );
};

export default SvgLayerUch;