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
  },
});

export const { setCompetitorList } = competitorSlice.actions;

export default competitorSlice.reducer;
