import Film from './Film'
import Person from './Person'

export default interface Vehicle {
  name: string
  model: string
  vehicle_class: string
  manufacturer: string
  length: string
  cost_in_credits: string
  crew: string
  passengers: string
  max_atmosphering_speed: string
  cargo_capacity: string
  consumables: string
  films: Film[]
  pilots: Person[]
  url: string
  created: string
  edited: string
}
