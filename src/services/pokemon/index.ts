import axios from 'axios';

const getPokemonByName = async (pokemonName: string ) => {
	const response = await axios.get(
		`https://pokeapi.co/api/v2/pokemon/${pokemonName}`
	)

	return response;
}

export default getPokemonByName;