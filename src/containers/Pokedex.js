import React, { Component } from 'react';
import axios from 'axios';

import Aux from '../hoc/Aux';
import Pokemon from '../components/Pokemon/Pokemon';

class Pokedex extends Component{
    state = {
        pokemon: [],
        sprites: []
    }

    componentDidMount(){
        axios.get('https://pokeapi.co/api/v2/pokemon/1/')
            .then(response =>{
                // console.log(response);
                this.setState({
                    pokemon: response.data.name,
                    sprite: response.data.sprites.front_default
                });
                // this.setState({spirtes: this.state.pokemon.sprites})
                console.log(this.state.pokemon);
                console.log(this.state.sprite);
            });
    }
    
    
    

    render(){
        // console.log(this.state.pokemon.slice(0, 4));
        // console.log(this.state.pokemon);
        // const pokemons = this.state.pokemon.results.map(pokemon => {
        //     return <Pokemon 
        //         name={pokemon.id.name}
        //     />
        // });
        return(
            <Aux>
                 <Pokemon 
                    image={this.state.sprite}
                    name={this.state.pokemon}
                    />
                <p>hello</p>
            </Aux>
        );
    }
}

export default Pokedex;