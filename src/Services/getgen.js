import axios from 'axios';


function getGeneration(){
    return axios.get("https://pokeapi.co/api/v2/generation/")
}

export default {getGeneration};
