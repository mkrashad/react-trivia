import {
  PokemonDispatchTypes,
  PokemonType,
  POKEMON_LOADING,
  POKEMON_FAIL,
  POKEMON_SUCCESS,
} from '../actions/PokemonActionTypes';

interface DefaultStateIntrface {
  loading: boolean;
  pokemon?: PokemonType;
}

const defaultState: DefaultStateIntrface = {
  loading: false,
};

const pokemonReducer = (
  state: DefaultStateIntrface = defaultState,
  action: PokemonDispatchTypes
): DefaultStateIntrface => {
  switch (action.type) {
    case POKEMON_LOADING:
      return {
        loading: true,
      };
    case POKEMON_FAIL:
      return {
        loading: false,
      };
    case POKEMON_SUCCESS:
      return {
        loading: false,
        pokemon: action.payload,
      };
    default:
      return state;
  }
};

export default pokemonReducer;
