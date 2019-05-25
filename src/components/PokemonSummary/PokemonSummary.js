import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './PokemonSummary.module.css';

const pokemonSummary = (props) => (
    <Aux>
            {/* <img src ={props.sprite} alt="pkmn_sprite"/> */}
            <img src ={props.sprite} alt="pkmn_sprite"/>

        <div className={classes.PokemonSummary}>
            <h3>ID: {props.id} {props.name}</h3>
            <p>HT: {props.height / 10} M</p>
            <p>WT: {props.weight / 10} KG</p>
        </div>
    </Aux>
);

export default pokemonSummary;