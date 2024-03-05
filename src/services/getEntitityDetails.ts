import Species from '../components/Species'
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
  const entityDetails = Object.entries(entity)
    .filter(([key, value]) => !Array.isArray(value))
    .filter(([key, value]) => value !== null)
    .filter(([key, value]) => value !== 'n/a')
    .map(([key, value]) => {
      if (key !== 'created' && key !== 'edited' && key !== 'url')
        return { label: removeUnderscore(key), value }
    })

  return entityDetails.filter(function (entity) {
    return entity !== undefined
  }) as Entity[]
}
