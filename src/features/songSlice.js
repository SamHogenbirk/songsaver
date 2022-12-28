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

		addSong: (state, action) => {
			const ac = action.payload
			// console.log(ac)
			const newSong = {
				id: ac.id,
				title: ac.title,
				artist: ac.artist,
				genre: ac.genre,
				rating: ac.rating
			}
			state.push(newSong)
		},

		deleteSong: (songs, action) => {
			console.log(action)
			return songs
				.map(item => item)//new array
				.filter((songs) => songs.id != action.payload.id)
		}
	}

});

export const { deleteSong } = songSlice.actions

export default songSlice.reducer;