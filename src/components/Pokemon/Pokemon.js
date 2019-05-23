import React from 'react';

const pokemon = ( props ) => {

    return(
        <div>
            <img src={props.image} alt="Pkmn_img"/>
            <p>{props.name}</p>
        </div>
    )
};

export default pokemon;