import { createSlice } from "@reduxjs/toolkit";

const songSlice = createSlice({

	name: "songs",
	initialState: [
		{
			id: "a",
			title: "b",
			artist: "c",
			genre: "d",
			rating: "e",
		},

	]
});

export default songSlice.reducer;