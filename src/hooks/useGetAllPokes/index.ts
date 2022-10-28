import { pokemon } from '../instance/index';
import { useEffect, useState } from 'react';
import { ResponsePokemons } from '../../interface/Pokemons';

const useGetAllPokes = () => {
    const [pokeResponse, setPokeRespose] = useState<ResponsePokemons>()

    useEffect(() => {
        pokemon.get<ResponsePokemons>('pokemon?offset=1&limit=1154').then((response) => {
            setPokeRespose(response.data)
        });
      }, []);

    return pokeResponse
}

export default useGetAllPokes;