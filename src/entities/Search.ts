import Film from './Film';
import Person from './Person';
import Planet from './Planet';
import Specie from './Specie';
import Starship from './Starship';
import Vehicle from './Vehicle';

export default interface SearchResult{
    
        count: number,
        next: string | null,
        previous: string | null,
        results: Person[] | Planet[] | Vehicle[] | Specie[] | Starship[] | Film[]
    }
