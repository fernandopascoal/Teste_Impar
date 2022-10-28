import { pokemon } from '../instance/index';
import { useEffect, useState } from 'react';
import { ResponsePokemons } from '../../interface/Pokemons';

const useGetPaginatedPokes = (offset: string, limit: string) => {
    const [pokeResponse, setPokeRespose] = useState<ResponsePokemons>()

    useEffect(() => {
        pokemon.get<ResponsePokemons>(`pokemon?offset=${offset}&limit=${limit}`).then((response) => {
            setPokeRespose(response.data)
        });
      }, [limit, offset]);

    return pokeResponse
}

export default useGetPaginatedPokes;