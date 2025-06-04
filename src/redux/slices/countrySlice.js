import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCountries = createAsyncThunk(
  "country/fetchCountries",
  async () => {
    const res = await fetch(
      "https://restcountries.com/v2/all?fields=name,region,flag"
    );
    return await res.json();
  }
);

const countriesSlice = createSlice({
  name: "country",
  initialState: {
    countries: [],
    selectedRegion: "All",
    status: "idle",
  },
  reducers: {
    setRegion: (state, action) => {
      state.selectedRegion = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCountries.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.countries = action.payload;
      })
      .addCase(fetchCountries.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { setRegion } = countriesSlice.actions;
export default countriesSlice.reducer;
