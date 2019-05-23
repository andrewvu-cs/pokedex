import React from 'react';

import classes from './Header.module.css';

const header = (props) => {
    return(
        <div className={classes.Header}>
            <h1>Pokédex!</h1>
            <h2>Built using ReactJS</h2>
        </div>
    )
}

export default header;