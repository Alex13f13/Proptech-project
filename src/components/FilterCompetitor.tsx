import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store/store"
import getPropertyType from "../utils/getPropertyType"
import { setCompetitorList } from "../store/slices/competitorSlice"
import { useGetCompetitorListByPageQuery } from "../services/competitorsApi"
import Loading from "./Loading"
import ErrorPage from "../pages/Error-Page"
import { ICompetitor } from "../models/ICompetitor"

export default function FilterCompetitor() {
  const page = useSelector((state: RootState) => state.competitorSlice.page)
  const { data, error, isLoading } = useGetCompetitorListByPageQuery(page)
  const dispatch = useDispatch()

  const filterCompetitorList: any = (event: any) => {
    const type = event.target.value;
    if (type === 'all') {
      dispatch(setCompetitorList(data?.competitorList || []))
    } else {
      dispatch(setCompetitorList(data?.competitorList?.filter((competitor: ICompetitor) => competitor.property_type.toString() === type) || []))
    }
  }

  return (
    <div>
      {error ? (<ErrorPage />) :
        isLoading ? <Loading /> :
          <select onChange={(event) => filterCompetitorList(event)}>
            <option value="all">Seleccione tipo de Vivienda</option>
            {data?.competitorList.map((competitor) => (
              <option key={competitor.id} value={competitor.property_type}>{getPropertyType(competitor.property_type)}</option>
            ))}
          </select>
      }
    </div>
  )
}
