import { useSelector } from "react-redux";
import { ICompetitor } from "../models/ICompetitor";
import CompetitorCard from "./CompetitorCard";
import { RootState } from "../store/store";
import { CardList } from "../styles/styles";

export default function CompetitorList() {
  const competitorList = useSelector((state: RootState) => state.competitorState.competitorList)
  return (
    <>
      <CardList>
        {competitorList?.map((competitor: ICompetitor) => (
          <div key={competitor.id}>
            <CompetitorCard competitor={competitor} />
          </div>
        ))}
      </CardList>
    </>
  )
}
