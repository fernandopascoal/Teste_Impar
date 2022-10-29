import { ClimaTempo } from './../../interface/ClimaTempo/index';
import { climatempo } from './../instance/ClimaTempo/index';

import { useEffect, useState } from 'react';


const useGetTemperature = () => {
    const [temperature, setTemperature] = useState<ClimaTempo>()


    useEffect(() => {
        climatempo.get('/api/v1/weather/locale/5959/current?token=d2ccc6c03ad9890b6aa6e7d339e3cd96').then((response) => {
            setTemperature(response.data)
        });
      }, []);

      return temperature

}

export default useGetTemperature;