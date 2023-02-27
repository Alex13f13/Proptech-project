import { ICompetitor } from "./ICompetitor";

export interface IStore {
  competitorList: ICompetitor[];
  isLoading: boolean;
}

export const emptyStore = (): IStore => {
  return {
    competitorList: [],
    isLoading: false,
  };
};
