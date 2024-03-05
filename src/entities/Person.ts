import Film from './Film'
import Specie from './Specie'
import Starship from './Starship'
import Vehicle from './Vehicle'

export default interface Person {
  name: string
  birth_year: string
  gender: string
  hair_color: string
  height: string
  mass: string
  skin_color: string
  homeworld: string
  films: Film[]
  species: Specie[]
  starships: Starship[]
  vehicles: Vehicle[]
  url: string
  created: string
  edited: string
}
