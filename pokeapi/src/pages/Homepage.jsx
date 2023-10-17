import React, { useEffect, useState } from 'react';
import Poke from '../services/classement';
import Pokecards from '../component/Classement';




const HomePage = () => {
    const [pokes, setPokes]= useState ([]);
    
    const fetchPokes = async () => {
        try {
            const response = await Poke.getPokemon();
            setPokes(response.data.results)
            
        } catch (error) {
            console.log(error)
        }
    }

useEffect (() => {
    fetchPokes()
}, [])


    return (
       <>
        {pokes.map(p=>{
            return <Pokecards poke={p}/>
        })} 
        </> )     
    };

export default HomePage;