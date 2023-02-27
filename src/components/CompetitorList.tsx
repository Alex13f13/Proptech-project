import { ICompetitor } from "../models/ICompetitor";
import { useGetCompetitorListByPageQuery } from "../services/competitorsApi";
import CompetitorCard from "./CompetitorCard";

export default function CompetitorList({ competitorList }: { competitorList: ICompetitor[] }) {
  return (
    <>
      {competitorList?.map((competitor: ICompetitor) => (
        <div key={competitor.id}>
          <CompetitorCard competitor={competitor} />
        </div>
      ))}
    </>
  )
}
