import { useMemo } from 'react';
import { possibleClimate } from './Data';
const useGetCurrentClimate = (climateId: string) => {
    const climate = useMemo(() => {
        return possibleClimate.find(({id}) => id === climateId)
    }, [climateId])

    return climate
}

export default useGetCurrentClimate;