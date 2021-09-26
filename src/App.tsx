import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { RootStore } from './Store';
// import { GetPokemon } from './actions/PokemonActions';
import StartQuiz from './components/StartQuiz';
import GamePlay from './components/GamePlay';

const App: React.FC = () => {
  const [game, setGame] = useState<boolean>(false);

  // const dispatch = useDispatch();
  // const [pokemonName, setPokemonName] = useState('');
  // const pokemonState = useSelector((state: RootStore) => state.pokemon);

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
  //   setPokemonName(event.target.value);

  // const handleSubmit = () => dispatch(GetPokemon(pokemonName));

  // console.log('Pokemon State:', pokemonState);

  const startGame = (): void => setGame(true);

  return (
    <div>
      {!game ? <StartQuiz startGame={startGame} /> : <GamePlay />}
      {/* <input type='text' onChange={handleChange} />
      <button onClick={handleSubmit}>Search</button>
      {pokemonState.pokemon && (
        <div>
          <img src={pokemonState.pokemon.sprites.front_default} alt='' />
          {pokemonState.pokemon.abilities.map((ability) => {
            return <p>{ability.ability.name}</p>;
          })}
        </div>
      )} */}
    </div>
  );
};

export default App;
