import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store/store"
import { propertyTypeNames } from "../utils/getPropertyType"
import { setCompetitorList, setFilters } from "../store/slices/competitorSlice"
import { useGetCompetitorListByPageQuery } from "../services/competitorsApi"
import Loading from "./Loading"
import { useFilter } from "../hooks/useFilter"

export default function FilterCompetitor() {
  const page = useSelector((state: RootState) => state.competitorState.page)
  const filter = useSelector((state: RootState) => state.competitorState.filter)
  const { data, isLoading } = useGetCompetitorListByPageQuery(page)

  const dispatch = useDispatch()
  const competitorList = useFilter(data?.competitorList || [], filter)

  useEffect(() => {
    dispatch(setCompetitorList(competitorList))
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
          {propertyTypeNames.map((type) => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      }
    </div>
  )
}
