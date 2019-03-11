import React from 'react';
import { connect } from 'react-redux';

import { deleteSmurf } from '../actions';

const Smurf = ({age, dispatch, height, id, name}) => {
    return (
        <div className="smurf">
            <h3>{name}</h3>
            <p><strong>Age: </strong>{age}</p>
            <p><strong>Height: </strong>{height}</p>
            <button onClick={event => {
                event.preventDefault();
                dispatch(deleteSmurf(id));
            }}>
                Delete Smurf
            </button>
        </div>
    );
};

export default connect()(Smurf);