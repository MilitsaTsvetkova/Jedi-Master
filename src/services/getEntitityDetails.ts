import Film from '../entities/Film'
import Person from '../entities/Person'
import Planet from '../entities/Planet'
import Specie from '../entities/Specie'
import Starship from '../entities/Starship'
import Vehicle from '../entities/Vehicle'
import { removeUnderscore } from '../utils/removeUnderscore'
interface Entity {
  label: string
  value: string
}

export const getEntityDetails = (
  entity: Planet | Vehicle | Specie | Film | Starship | Person
): Entity[] => {
  const omitted = ['created', 'edited', 'url', 'homeworld', 'residents']
  const entityDetails = Object.entries(entity)
    .filter(
      ([key, value]) =>
        !Array.isArray(value) && value !== null && value !== 'n/a'
    )
    .map(([key, value]) => {
      if (!omitted.includes(key)) return { label: removeUnderscore(key), value }
    })

  return entityDetails.filter(function (entity) {
    return entity !== undefined
  }) as Entity[]
}
