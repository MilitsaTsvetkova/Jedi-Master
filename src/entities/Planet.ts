import Film from './Film'
import Person from './Person'

export default interface Planet {
  name: string
  diameter: string
  rotation_period: string
  orbital_period: string
  gravity: string
  population: string
  climate: string
  terrain: string
  surface_water: string
  residents: Person[]
  films: Film[]
  url: string
  created: string
  edited: string
}
