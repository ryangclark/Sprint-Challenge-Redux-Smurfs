import React from 'react';

const Smurf = ({age, height, name}) => {
    return (
        <div className="smurf">
            <h3>{name}</h3>
            <p><strong>Age: </strong>{age}</p>
            <p><strong>Height: </strong>{height}</p>
        </div>
    );
};

export default Smurf;