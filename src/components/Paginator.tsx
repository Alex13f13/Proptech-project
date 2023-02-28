import { useGetCompetitorListQuery } from "../services/competitorsApi"
import Loading from "./Loading"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store/store"
import { setPage } from "../store/slices/competitorSlice"

export default function Paginator() {
  const page = useSelector((state: RootState) => state.competitorSlice.page)
  let { data, isLoading } = useGetCompetitorListQuery(page)

  const dispatch = useDispatch()

  return (
    <div>
      {isLoading ? (<Loading />) :
        data?.link ? (
          <>
            {data?.link?.first && <button onClick={() => dispatch(setPage(data?.link?.first))}>First Page</button>}
            {data?.link?.prev && <button onClick={() => dispatch(setPage(data?.link?.prev))}>Previous Page</button>}
            {data?.link?.next && <button onClick={() => dispatch(setPage(data?.link?.next))}>Next Page</button>}
            {data?.link?.last && <button onClick={() => dispatch(setPage(data?.link?.last))}>Last Page</button>}
          </>
        )
          : null
      }
    </div>
  )
}
