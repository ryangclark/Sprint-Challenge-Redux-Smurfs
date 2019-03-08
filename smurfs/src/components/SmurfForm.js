import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { addSmurf } from '../actions';

const SmurfForm = ({ dispatch }) => {
    // varibales for refs
    let ageInput;
    let heightInput;
    let nameInput;
    let smurfForm;

    return (
        <form
            className="smurf-form"
            onSubmit={event => {
                event.preventDefault();
                console.log('smurfForm submit');
                dispatch(addSmurf(
                    ageInput.value,
                    heightInput.value,
                    nameInput.value)
                );
                smurfForm.reset();
            }}
            ref={node => smurfForm = node}
        >
            <label>
                Name:<br></br>
                <input
                    name="name"
                    ref={node => nameInput = node}
                    required
                    type="text"
                /><br></br>
            </label>
            <label>
                Age:<br></br>
                <input
                    name="age"
                    ref={node => ageInput = node}
                    required
                    type="number"
                /><br></br>
            </label>
            <label>
                Height:<br></br>
                <input
                    name="height"
                    ref={node => heightInput = node}
                    required
                    type="number"
                /><br></br>
            </label><br></br>
            <button type="submit">Add Smurf!</button>
        </form>
    )
}

export default connect()(SmurfForm);