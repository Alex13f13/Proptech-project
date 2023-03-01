import { useDispatch, useSelector } from 'react-redux';
import CompetitorList from '../components/CompetitorList';
import Loading from '../components/Loading';
import { useGetCompetitorListByPageQuery } from '../services/competitorsApi'
import ErrorPage from './Error-Page'
import { RootState } from '../store/store';
import { setCompetitorList } from '../store/slices/competitorSlice';
import { useEffect } from 'react';
import FilterCompetitor from '../components/FilterCompetitor';

export default function Home() {
  const page = useSelector((state: RootState) => state.competitorSlice.page)
  const { data, error, isLoading } = useGetCompetitorListByPageQuery(page)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setCompetitorList(data?.competitorList || []))
  }, [data])

  return (
    <div>
      <h1>Frontend uDA Challenge</h1>
      {error ? (<ErrorPage />) :
        isLoading ? (<Loading />) :
          data ? (
            <>
              <FilterCompetitor />
              <CompetitorList />
            </>
          ) :
            <p>No results founded</p>}
    </div>
  )
}
