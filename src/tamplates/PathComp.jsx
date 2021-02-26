import React from 'react';

const PathComp = ({className, d, fill, stroke}) => {
    return (
        <path
            className={className}
            d={d}
            fill={fill}
            stroke={stroke}
        />

    );
};

export default PathComp;