import Person from './Person'
import Planet from './Planet'
import Specie from './Specie'
import Starship from './Starship'
import Vehicle from './Vehicle'

export default interface Film {
  title: string
  episode_id: number
  opening_crawl: string
  director: string
  producer: string
  release_date: string
  species: Specie[]
  starships: Starship[]
  vehicles: Vehicle[]
  characters: Person[]
  planets: Planet[]
  url: string
  created: string
  edited: string
}
