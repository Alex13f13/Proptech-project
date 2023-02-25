import { useGetCompetitorByPageQuery } from "./services/competitorsApi"

export default function App() {
  const { data, error, isLoading } = useGetCompetitorByPageQuery(1)
  return (
    <div>
      {error ? (
        <>Oh no, there was an error</>
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