import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store/store"
import getPropertyType, { propertyTypes } from "../utils/getPropertyType"
import { setCompetitorList, setFilters } from "../store/slices/competitorSlice"
import { useGetCompetitorListByPageQuery } from "../services/competitorsApi"
import Loading from "./Loading"
import { ICompetitor } from "../models/ICompetitor"
import { useEffect } from "react"

export default function FilterCompetitor() {
  const page = useSelector((state: RootState) => state.competitorState.page)
  const filter = useSelector((state: RootState) => state.competitorState.filter)
  const { data, isLoading } = useGetCompetitorListByPageQuery(page)
  const dispatch = useDispatch()

  useEffect(() => {
    if (filter === 'all') {
      dispatch(setCompetitorList(data?.competitorList || []))
    } else {
      dispatch(setCompetitorList(data?.competitorList?.filter((competitor: ICompetitor) => getPropertyType(competitor.property_type) === filter) || []))
    }
  }, [filter, data])


  const filterCompetitorList: any = (event: any) => {
    const type = event.target.value;
    dispatch(setFilters(type))
  }

  return (
    <div>
      {isLoading ? <Loading /> :
        <select onChange={(event) => filterCompetitorList(event)} defaultValue={filter}>
          <option value="all">Seleccione tipo de Vivienda</option>
          {propertyTypes.map((type) => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      }
    </div>
  )
}
