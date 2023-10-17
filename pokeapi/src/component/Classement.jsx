import React from 'react';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';


const Pokecards = ({poke}) => {
    return ( 
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/"+ poke.order +".png"}/>
      <Card.Body>
        <Card.Title>{poke.name}</Card.Title>
        <Card.Text>
            <Link to={"/poke/details"} state={poke}></Link>
        </Card.Text>
      </Card.Body>
    </Card>
     );
}
 
export default Pokecards;