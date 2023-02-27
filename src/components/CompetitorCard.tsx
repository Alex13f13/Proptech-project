import { ICompetitor } from '../models/ICompetitor'
import { NavLink } from 'react-router-dom'
import formatNumberToPrice from '../utils/formatNumberToPrice'

export default function CompetitorCard({ competitor }: { competitor: ICompetitor }) {
  return (
    <div>
      <NavLink to={`/competitorDetails/${competitor.id}`}>
        <img src={competitor.images[0]} alt={competitor.location.address} />
        <h3>{competitor.location.address}</h3>
        <h4>{formatNumberToPrice(competitor.price)}</h4>
      </NavLink>
    </div>
  )
}
