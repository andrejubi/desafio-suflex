import { NoResultsFoundStyled } from './style'
import { FaQuestion } from 'react-icons/fa'

interface INoResultsFound {
  title: string
  subtitle: string
}

const NoResultsFound = ({ title, subtitle }: INoResultsFound) => {
  return (
    <NoResultsFoundStyled>
      <h1 className="icon">
        <FaQuestion />
      </h1>
      <h4> {title} </h4>
      <span> {subtitle} </span>
    </NoResultsFoundStyled>
  )
}

export default NoResultsFound
