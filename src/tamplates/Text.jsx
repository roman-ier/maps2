import React from 'react';

const Text = ({x, body}) => {
    x=x.split(',')
    return (
        <text x={x[0]} y={x[1]}>
            {body}
        </text>
    );
};

export default Text;