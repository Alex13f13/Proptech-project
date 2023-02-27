import CompetitorList from '../components/CompetitorList';
import Loading from '../components/Loading';
import { useGetCompetitorListQuery } from '../services/competitorsApi'
import ErrorPage from './Error-Page'

export default function Home() {
  const { data, error, isLoading, } = useGetCompetitorListQuery(0)
  return (
    <div>
      <h1>Frontend uDA Challenge</h1>
      {error ? (<ErrorPage />) :
        isLoading ? (<Loading />) :
          data ? (<CompetitorList competitorList={data.competitorList} totalPages={data.totalPages} />) :
            <p>No results founded</p>}
    </div>
  )
}
