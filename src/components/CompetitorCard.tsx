import { ICompetitor } from '../models/ICompetitor'
import { NavLink } from 'react-router-dom'
import formatNumberToPrice from '../utils/formatNumberToPrice'
import { Card, CardImg, CardPrice, CardTitle, NavLinks } from '../styles/styles'

export default function CompetitorCard({ competitor }: { competitor: ICompetitor }) {
  return (
    <Card>
      <NavLinks to={`/competitorDetails/${competitor.id}`}>
        <CardImg src={competitor.images[0]} alt={competitor.location.address} />
        <CardTitle>{competitor.location.address}</CardTitle>
        <CardPrice>{formatNumberToPrice(competitor.price)}</CardPrice>
      </NavLinks>
    </Card>
  )
}
