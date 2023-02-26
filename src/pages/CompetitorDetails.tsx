import { useNavigate, useParams } from "react-router-dom";
import { useGetCompetitorByIdQuery } from "../services/competitorsApi"
import ErrorPage from "./Error-Page"

export default function CompetitorDetails() {
  const navigate = useNavigate();
  let { id } = useParams() as any;
  const { data: competitor, error, isLoading } = useGetCompetitorByIdQuery(id)

  return (
    <div>
      <button
        type="button"
        onClick={() => {
          navigate(-1);
        }}
      >
        Return
      </button>
      {error ? (
        <ErrorPage />
      ) : isLoading ? (
        <>Loading...</>
      ) : competitor ? (
        <>
          <div key={competitor.id}>
            <h3>{competitor.location.address}</h3>
            <img src={competitor.images[0]} alt={competitor.location.address} />
          </div>
        </>
      ) : null}
    </div>
  )
}
