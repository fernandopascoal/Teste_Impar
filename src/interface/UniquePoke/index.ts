export interface UniquePoke {
    id: number
    name: string;
    types: {
      slot: number;
      type: {
        name: string
      }
    }[];
    sprites: {
      back_default: string | null;
      front_default: string | null;
    }
    stats: {
      base_stat: number,
      stat: {
        name: string
      }
    }[];
    weight: number;
}