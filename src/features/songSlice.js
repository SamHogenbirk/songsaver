import { createSlice } from "@reduxjs/toolkit";

const emo = {

	1: "0x1F4A9",
	2: "0x1F641",
	3: "0x1F610",
	4: "0x1F642",
	5: "0x1F60D"
}

const convertEmo = (emo) => String.fromCodePoint(emo)

// { id: "1", title: "a", artist: "a", genre: "a", rating: "1" },
// { id: "2", title: "z", artist: "z", genre: "z", rating: "2" }

const songSlice = createSlice({

	name: "songs",
	initialState: [],

	reducers: {

		addSong: (state, action) => {

			const ac = action.payload
			const newSong = {
				id: ac.id,
				title: ac.title,
				artist: ac.artist,
				genre: ac.genre,
				rating: convertEmo(emo[ac.rating])
			}
			state.push(newSong)
			// console.log(newSong)
		},

		sortSong: (songs, action) => {
	
			return songs.sort((a, b) => (a[action.payload.title] < b[action.payload.title] ? 1 : -1))
		},

		deleteSong: (songs, action) => {

			return songs.filter((songs) => songs.id !== action.payload.id)
		}
	}

});

export const { addSong, sortSong, deleteSong } = songSlice.actions

export default songSlice.reducer;