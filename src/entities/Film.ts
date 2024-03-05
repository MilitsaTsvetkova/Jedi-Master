import Specie from './Specie'

export default interface Film {
  title: string
  episode_id: number
  opening_crawl: string
  director: string
  producer: string
  release_date: string
  species: Specie[]
  starships: string[]
  vehicles: string[]
  characters: string[]
  planets: string[]
  url: string
  created: string
  edited: string
}
