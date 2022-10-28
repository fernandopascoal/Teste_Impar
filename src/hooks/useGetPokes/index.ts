import { pokemon } from './../instance/index';
import { useEffect, useState } from 'react';
import { ResponsePokemons } from '../../interface/Pokemons';
import { AxiosResponse } from 'axios';

const useGetPokes = (offset: string, limit: string) => {
    const [pokeResponse, setPokeRespose] = useState<ResponsePokemons>()

    useEffect(() => {
        pokemon.get<ResponsePokemons>(`pokemon/?offset=${offset}&limit=16`).then((response) => {
            setPokeRespose(response.data)
        });
      }, [offset]);

    return pokeResponse
}

export default useGetPokes;