import { useSelector } from "react-redux";
import { ICompetitor } from "../models/ICompetitor";
import CompetitorCard from "./CompetitorCard";
import Paginator from "./Paginator";
import { RootState } from "../store/store";

export default function CompetitorList() {
  const competitorList = useSelector((state: RootState) => state.competitorState.competitorList)
  return (
    <>
      {competitorList?.map((competitor: ICompetitor) => (
        <div key={competitor.id}>
          <CompetitorCard competitor={competitor} />
        </div>
      ))}
      <Paginator />
    </>
  )
}
