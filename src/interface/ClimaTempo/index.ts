export interface ClimaTempo {
      
        id: number,
        name: string,
        state: string,
        country: string,
        data: {
          temperature: number,
          wind_direction: string,
          wind_velocity: number,
          humidity: number,
          condition: string,
          pressure: string,
          icon: string,
          sensation: number,
          date: string
        }
      
}