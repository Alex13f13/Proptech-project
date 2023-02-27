import { ICompetitor } from "../models/ICompetitor";
import { IResponseData } from "../models/IResponseData";
import CompetitorCard from "./CompetitorCard";
import Paginator from "./Paginator";

export default function CompetitorList({ competitorList, totalPages }: IResponseData) {
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
