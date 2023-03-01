import { useMemo } from "react"
import getPropertyType from "../utils/getPropertyType"
import { ICompetitor } from "../models/ICompetitor"

export const useFilter = (data: any, filter: string) => {
  const filterData = useMemo(() => {
    if (filter === 'all') {
      return data
    } else {
      return data?.filter((competitor: ICompetitor) => getPropertyType(competitor.property_type) === filter)
    }
  }, [filter, data])

  return filterData
}
