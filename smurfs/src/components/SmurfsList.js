import React from 'react';

import Smurf from './Smurf';

const SmurfsList = props => {
    console.log('smurfsList: ', props.smurfsList);
    return (
        <section className="smurfs-list">
            {props.smurfsList.map(smurf =>
                <Smurf key={smurf.id} {...smurf} />   
            )}
        </section>
    );
};

export default SmurfsList;