import { createSlice } from "@reduxjs/toolkit";

const songSlice = createSlice({
	name: "songs",
	initialState: [
		{
			id: "",
			title: "",
			artist: "",
			genre: "",
			rating: "",
		},
	
	]
});

export default songSlice.reducer;