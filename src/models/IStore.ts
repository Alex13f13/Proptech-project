import { ICompetitor } from "./ICompetitor";

export interface IStore {
  competitorList: ICompetitor[];
  page: number;
}

export const emptyStore = (): IStore => {
  return {
    competitorList: [],
    page: 1,
  };
};
