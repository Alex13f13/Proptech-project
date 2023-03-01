import { useGetCompetitorListByPageQuery } from "../services/competitorsApi"
import Loading from "./Loading"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store/store"
import { setPage } from "../store/slices/competitorSlice"

export default function Paginator() {
  const page = useSelector((state: RootState) => state.competitorState.page)
  let { data, isLoading } = useGetCompetitorListByPageQuery(page)
  const dispatch = useDispatch()

  return (
    <div>
      {isLoading ? (<Loading />) :
        data?.paginationLinks && (
          <>
            {data?.paginationLinks?.prev && <button onClick={() => dispatch(setPage(data?.paginationLinks?.prev))}>Previous Page</button>}
            {data?.paginationLinks?.next && <button onClick={() => dispatch(setPage(data?.paginationLinks?.next))}>Next Page</button>}
            {data?.paginationLinks?.last && data?.paginationLinks?.last !== page && <button onClick={() => dispatch(setPage(data?.paginationLinks?.last))}>Last Page</button>}
          </>
        )
      }
    </div>
  )
}
