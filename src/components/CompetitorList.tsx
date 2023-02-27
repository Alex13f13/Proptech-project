import { ICompetitor } from "../models/ICompetitor";
import { ICompetitorResponseData } from "../models/IResponseData";
import CompetitorCard from "./CompetitorCard";
import Paginator from "./Paginator";

export default function CompetitorList({ competitorList, totalPages }: ICompetitorResponseData) {
  return (
    <>
      {competitorList?.map((competitor: ICompetitor) => (
        <div key={competitor.id}>
          <CompetitorCard competitor={competitor} />
        </div>
      ))}
      <Paginator totalPages={totalPages} />
    </>
  )
}
