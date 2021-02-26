import React from 'react';
import PathComp from "../tamplates/PathComp";
import Text from "../tamplates/Text";

const SvgAreaNumber = ({dataStore, colors}) => {
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

export default SvgAreaNumber;