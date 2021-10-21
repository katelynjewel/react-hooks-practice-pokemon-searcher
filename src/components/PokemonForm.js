import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ setPokemon }) {
  const [newPokemon, setNewPokemon] = useState({
    name: "",
    hp: "",
    frontUrl: "",
    backUrl: "",
  })

  function handleChange(e) {
    setNewPokemon((currentNewPokemon) => {
      return {
        ...currentNewPokemon,
        [e.target.name]: e.target.value,
      }
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const pokemon={
      name: newPokemon.name,
      hp: newPokemon.hp,
      sprites: {
        front: newPokemon.frontUrl,
        back: newPokemon.backUrl
      }
    }
    fetch("http://localhost:3001/pokemon", {
      method: "POST",
      headers: {
        "Content-Type": 'application/json',
        "Accept": 'application/json'
      },
      body: JSON.stringify(pokemon)
    }) .then (resp => resp.json())
    .then((data) => setPokemon(currentPokemon => [data, ...currentPokemon]));
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={() => {
          console.log("submitting form...");
        }}
      >
        <Form.Group widths="equal">
          <Form.Input 
            fluid label="Name" 
            placeholder="Name" 
            name="name" 
            value={newPokemon.name}
            onChange={handleChange}
          />
          <Form.Input 
            fluid label="hp" 
            placeholder="hp" 
            name="hp" 
            value={newPokemon.hp}
            onChange={handleChange}
          />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={newPokemon.frontUrl}
            onChange={handleChange}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={newPokemon.backUrl}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Button onSubmit={handleSubmit}>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
