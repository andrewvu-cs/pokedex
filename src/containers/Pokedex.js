import React, { Component } from 'react';
import axios from 'axios';

// import Aux from '../hoc/Aux';
import Pokemon from '../components/Pokemon/Pokemon';
import classes from './Pokedex.module.css';

class Pokedex extends Component{
    state = {
        results: [],
        names: [],
        urls: [],
        imgResults: [],
        sprites: []
    }

    componentDidMount(){
        axios.get('https://pokeapi.co/api/v2/pokemon/?limit=151/')
            .then(response =>{
                // console.log(response);
                this.setState({
                    results: response.data.results
                    // sprite: response.data.sprites.front_default
                });

                //GRABS THE NAMES AND URLS FOR EACH POKEMON
                let names = [];
                let urls = [];
                this.state.results.map(result => {
                    return names.push(result.name);
                })
                this.state.results.map(result => {
                    return urls.push(result.url);
                })
            
                this.setState({
                    names: [...names],
                    urls: [...urls]
                })
                
                //LOOKUP FOR EACH POKEMON TO GRAB THEIR RESPECTIVE SPRITE
                let sprites = [];
                for (let i = 0; i < this.state.urls.length; i++){
                    axios.get(this.state.urls[i])
                        .then(response=>{
                            this.setState({
                                imgResults: response.data.sprites
                            })
                            sprites.push(this.state.imgResults.front_default);

                            //Natural sort for array of strings, failsafe for promises
                            sprites.sort(function(a, b) {
                                return +/\d+/.exec(a)[0] - +/\d+/.exec(b)[0];
                              });

                            this.setState({
                                sprites: [...sprites]
                            })
                    
                            
                        })
                    // sprites.push(this.state.imgResults.front_default);
            
                }
                
            });

    }

    
    render(){
       
        // WHERE I MAP ALL POKEMON AFTER OBTAINING EVERY NAME
        const pokemons = this.state.results.map((result,pkmnKey) => {
            return <Pokemon 
                name = {result.name}
                key = {pkmnKey}
                image = {this.state.sprites[pkmnKey]}
            />;
        });
        return(
            <div className={classes.Pokedex}>
                 {/* <Pokemon 
                    image={this.state.sprite}
                    name={this.state.pokemon}
                    /> */}
                {pokemons}
            </div>
        );
    }
}

export default Pokedex;