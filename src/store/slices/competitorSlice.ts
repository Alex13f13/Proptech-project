import { ICompetitor } from './../../models/ICompetitor';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { emptyStore, IStore } from "../../models/IStore";

const initialState: IStore = emptyStore();

export const competitorSlice = createSlice({
  name: "competitorSlice",
  initialState,
  reducers: {
    setCompetitorList: (state, action: PayloadAction<ICompetitor[]>) => {
      state.competitorList = action.payload;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setFilters: (state, action: any) => {
      state.filter = action.payload;
    }
  },
});

export const { setCompetitorList, setPage, setFilters } = competitorSlice.actions;
export default competitorSlice.reducer;
