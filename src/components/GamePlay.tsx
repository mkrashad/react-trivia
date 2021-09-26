import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GetPokemon } from '../actions/PokemonActions';
import { RootStore } from '../Store';

const GamePlay: React.FC = () => {
  const dispatch = useDispatch();
  const pokemonState = useSelector((state: RootStore) => state.pokemon);
  const handleSubmit = () => dispatch(GetPokemon());

  console.log('Pokemon State:', pokemonState);
  return (
    <div>
      <h1>Entertainment Videogames</h1>
      <p>level1</p>
      <h3>The Retail disc of tony hawk</h3>
      <button onClick={handleSubmit}>True</button>
      <button>False</button>
    </div>
  );
};

export default GamePlay;
