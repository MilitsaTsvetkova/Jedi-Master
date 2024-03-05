import Film from './Film'
import Person from './Person'

export default interface Specie {
  name: string
  classification: string
  designation: string
  average_height: string
  average_lifespan: string
  eye_colors: string
  hair_colors: string
  skin_colors: string
  language: string
  homeworld: string
  people: Person[]
  films: Film[]
  url: string
  created: string
  edited: string
}
