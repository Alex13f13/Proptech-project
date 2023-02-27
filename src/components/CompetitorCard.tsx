import React from 'react'
import { ICompetitor } from '../models/ICompetitor'
import { NavLink } from 'react-router-dom'

export default function CompetitorCard({ competitor }: { competitor: ICompetitor }) {
  return (
    <div>
      <NavLink to={`/competitorDetails/${competitor.id}`}>Details</NavLink>
      <h3>{competitor.location.address}</h3>
      <img src={competitor.images[0]} alt={competitor.location.address} />
    </div>
  )
}
