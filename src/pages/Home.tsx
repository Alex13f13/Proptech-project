import { useGetCompetitorListByPageQuery } from '../services/competitorsApi'
import ErrorPage from './Error-Page'
import { NavLink } from "react-router-dom";

export default function Home() {
  const { data: competitorList, error, isLoading } = useGetCompetitorListByPageQuery(1)

  return (
    <div>
      {error ? (
        <ErrorPage />
      ) : isLoading ? (
        <>Loading...</>
      ) : competitorList ? (
        <>
          {competitorList.map((competitor) => (
            <div key={competitor.id}>
              <NavLink to={`/competitorDetails/${competitor.id}`}>Details</NavLink>
              <h3>{competitor.location.address}</h3>
              <img src={competitor.images[0]} alt={competitor.location.address} />
            </div>
          ))}
        </>
      ) : null}
    </div>
  )
}
