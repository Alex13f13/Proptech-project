import { useGetCompetitorListByPageQuery } from '../services/competitorsApi'
import ErrorPage from './Error-Page'

export default function Home() {
  const { data, error, isLoading } = useGetCompetitorListByPageQuery(1)

  return (
    <div>
      {error ? (
        <ErrorPage />
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          {data.map((competitor) => (
            <div key={competitor.id}>
              <h3>{competitor.location.address}</h3>
              <img src={competitor.images[0]} alt={competitor.location.address} />
            </div>
          ))}
        </>
      ) : null}
    </div>
  )
}
