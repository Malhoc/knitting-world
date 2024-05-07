import { createSlice } from "@reduxjs/toolkit";
import portFolioItems from "../../api/portFolioItems";
const portFolioSlice = createSlice({
  name: "portFolio",
  initialState: {
    portFolioItems: portFolioItems,
    selectedPortFolio: "",
  },
  reducers: {
    setSelectedPortFolio(state, action) {
      state.selectedPortFolio = action.payload;
    },
  },
});

export const { setSelectedPortFolio } = portFolioSlice.actions;

export default portFolioSlice.reducer;
