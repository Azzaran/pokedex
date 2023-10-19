import React, { useEffect, useState } from 'react';
import pokemonService from '../Services/pokemonService';
import { useParams } from 'react-router-dom';
import Pokemon from '../Components/Pokemon';

const PokemonGen = () => {
    const [pokegen, setPokegen]= useState([]);
    const {name}= useParams();
    const fetchPokegen = async () => {
        try {
            const response = await pokemonService.getByGeneration(name)
            setPokegen(response.data.pokemon_species)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() =>{
        fetchPokegen()
    }, [])

    return ( <>
        {pokegen.map(g =>{
            return  <Pokemon key={g.pokemon_species} pokemon={g} />
        })}
    </> );
}
 
export default PokemonGen;