import React, {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [search, setSearch] = useState("") 
  const [pokemon, setPokemon] = useState([])

  useEffect(getPokemon, []);

  function getPokemon() {
    fetch("http://localhost:3001/pokemon")
    .then(resp => resp.json())
    .then(data => setPokemon(data))
  }
  const handleSearch = pokemon.filter((pokemon) => 
    pokemon.name.includes(search)
  );

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm setPokemon={setPokemon}/>
      <br />
      <Search setSearch={setSearch} handleSearch={handleSearch}/>
      <br />
      <PokemonCollection pokemon={handleSearch}/>
    </Container>
  );
}

export default PokemonPage;
