import { useNavigate, useParams } from "react-router-dom";
import { useGetCompetitorByIdQuery } from "../services/competitorsApi"
import ErrorPage from "./Error-Page"

export default function CompetitorDetails() {
  const navigate = useNavigate();
  let { id } = useParams() as any;
  const { data, error, isLoading } = useGetCompetitorByIdQuery(id)

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
