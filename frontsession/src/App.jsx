import "./App.css";
import React, { useState } from "react";

function Pokemon(props) {
  function changePokemonDitto() {
    const index = props.index;
    props.setPokemons((prevPokemons) => {
      const newPokemons = [...prevPokemons];
      newPokemons[index] = {
        name: "ditto",
        image:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
      };
      return newPokemons;
    });
  }
  return (
    <li onClick={() => changePokemonDitto()}>
      <img src={props.image} alt={props.name} />
      {props.name}
    </li>
  );
}

function App() {
  const [pokemons, setPokemons] = useState([
    {
      name: "bulbasaur",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    },
    {
      name: "ivysaur",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
    },
    {
      name: "venusaur",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
    },
  ]);

  return (
    <div className="App">
      <div className="container">
        <h1>pokemon</h1>

        <ul>
          {pokemons.map((pokemon, i) => {
            return (
              <Pokemon
                name={pokemon.name}
                image={pokemon.image}
                index={i}
                setPokemons={setPokemons}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
