import React from 'react';

import classes from './Pokemon.module.css';

const pokemon = ( props ) => {

    return(
        <div className={classes.Pokemon}>
            <img src={props.image} alt="Pkmn_img"/>
            <hr/>
            <p>{props.name}</p>
        </div>
    )
};

export default pokemon;