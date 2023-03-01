import { ICompetitor } from "./ICompetitor";

export interface IStore {
  competitorList: ICompetitor[];
  page: number;
  filter: any;
}

export const emptyStore = (): IStore => {
  return {
    competitorList: [],
    page: 1,
    filter: "all",
  };
};
