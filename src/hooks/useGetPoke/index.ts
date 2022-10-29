import { pokemon } from '../instance/Pokemon/index';
import { useEffect, useState } from 'react';
import { UniquePoke } from '../../interface/UniquePoke';

const useGetPoke = (url: string) => {
    const [poke, setPoke] = useState<UniquePoke>()

    useEffect(() => {
        pokemon.get<UniquePoke>(url).then((response) => {
            setPoke(response.data)
        });
      }, [url]);

    return poke
}

export default useGetPoke;