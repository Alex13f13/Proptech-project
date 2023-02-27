import { useParams } from "react-router-dom";
import { useGetCompetitorByIdQuery } from "../services/competitorsApi"
import ErrorPage from "./Error-Page"
import Loading from "../components/Loading";
import ReturnButton from "../components/ReturnButton";

export default function CompetitorDetails() {
  let { id } = useParams() as any;
  const { data: competitor, error, isLoading } = useGetCompetitorByIdQuery(id)

  return (
    <div>
      {error ? (
        <ErrorPage />
      ) : isLoading ? (
        <Loading />
      ) : competitor ? (
        <>
          <div key={competitor.id}>
            <ReturnButton />
            <h3>{competitor.location.address}</h3>
            <img src={competitor.images[0]} alt={competitor.location.address} />
          </div>
        </>
      ) : null}
    </div>
  )
}
