import { ICompetitor } from './../../models/ICompetitor';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { emptyStore, IStore } from "../../models/IStore";

const initialState: IStore = emptyStore();

export const competitorSlice = createSlice({
  name: "competitorStore",
  initialState,
  reducers: {
    setCompetitorList: (state, action: PayloadAction<ICompetitor[]>) => {
      state.competitorList = action.payload;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
  },
});

export const { setCompetitorList, setPage } = competitorSlice.actions;

export default competitorSlice.reducer;
