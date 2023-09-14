import React, { useState } from "react";
import axios from "axios";

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchAllPokemon = () => {
    setIsLoading(true);
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then((response) => {
        setPokemonList(response.data.results);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching Pokémon data:", error);
        setIsLoading(false);
      });
  };

  return (
    <div>
      <h1>List of Pokémon</h1>
      <button onClick={fetchAllPokemon} disabled={isLoading}>
        {isLoading ? "Loading..." : "Fetch All Pokémon"}
      </button>
      {pokemonList.length > 0 && (
        <ul>
          {pokemonList.map((pokemon, index) => (
            <li key={index}>{pokemon.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PokemonList;
