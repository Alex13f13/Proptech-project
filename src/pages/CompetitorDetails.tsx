import { useGetCompetitorByIdQuery } from "../services/competitorsApi"

export default function CompetitorDetails() {
  const { data, error, isLoading } = useGetCompetitorByIdQuery(2)
  return (
    <div>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <div key={data.id}>
            <h3>{data.location.address}</h3>
            <img src={data.images[0]} alt={data.location.address} />
          </div>
        </>
      ) : null}
    </div>
  )
}
