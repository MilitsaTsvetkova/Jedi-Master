import Film from './Film'
import Person from './Person'

export default interface Starship {
  name: SVGStringList
  model: string
  starship_class: SVGStringList
  manufacturer: string
  cost_in_credits: string
  length: string
  crew: string
  passengers: SVGStringList
  max_atmosphering_speed: string
  hyperdrive_rating: string
  MGLT: string
  consumables: string
  films: Film[]
  pilots: Person[]
  url: string
  created: string
  edited: string
}
