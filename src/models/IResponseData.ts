import { ICompetitor } from "./ICompetitor";

export interface ICompetitorResponseData {
  competitorList: ICompetitor[];
  totalPages: number;
  link?: any;
}
