import { useParams } from "react-router-dom";
import { useGetCompetitorByIdQuery } from "../services/competitorsApi"
import ErrorPage from "./Error-Page"
import Loading from "../components/Loading";
import ReturnButton from "../components/ReturnButton";
import formatNumberToPrice from "../utils/formatNumberToPrice";
import getPropertyType from "../utils/getPropertyType";
import { Container, DetailsImg } from "../styles/styles";

export default function CompetitorDetails() {
  let { id } = useParams() as any;
  const { data: competitor, error, isLoading } = useGetCompetitorByIdQuery(id)

  return (
    <Container>
      {error ? (
        <ErrorPage />
      ) : isLoading ? (
        <Loading />
      ) : competitor ? (
        <>
          <div key={competitor.id}>
            <ReturnButton />
            <h3>{competitor.location.address}</h3>
            <DetailsImg src={competitor.images[0]} alt={competitor.location.address} />
            <h4>{formatNumberToPrice(competitor.price)}</h4>
            <p>{getPropertyType(competitor.property_type)}</p>
            <p>Dimensiones: {competitor.area}m2</p>
            <p>Habitaciones: {competitor.rooms}</p>
            <p>Baños: {competitor.bathrooms}</p>
          </div>
        </>
      ) : null}
    </Container>
  )
}
