import CompetitorList from '../components/CompetitorList';
import Loading from '../components/Loading';
import { useGetCompetitorListByPageQuery } from '../services/competitorsApi'
import ErrorPage from './Error-Page'

export default function Home() {
  const { data: competitorList, error, isLoading } = useGetCompetitorListByPageQuery(1)

  return (
    <div>
      <h1>Frontend uDA Challenge</h1>
      {error ? (<ErrorPage />) :
        isLoading ? (<Loading />) :
          competitorList ?
            <CompetitorList competitorList={competitorList} /> : <p>No results founded</p>}
    </div>
  )
}
