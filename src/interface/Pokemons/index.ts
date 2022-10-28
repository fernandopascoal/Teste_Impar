export interface Pokemons {
name: string
url: string
}


export interface ResponsePokemons {
count: number;
next: string | null;
previous: string | null;
results: Array<Pokemons>
}