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

	],

	reducers: {

		deleteSong: (songs, action) => {
			// console.log(action)
			return songs
				.map(item => item)
				.filter((songs) => songs.id != action.payload.id)
		}
	}

});

export const { deleteSong } = songSlice.actions

export default songSlice.reducer;