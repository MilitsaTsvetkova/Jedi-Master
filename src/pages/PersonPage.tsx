import { useParams } from 'react-router-dom'

const PersonPage = () => {
  const { id } = useParams()
  return <div>person {id}</div>
}

export default PersonPage
