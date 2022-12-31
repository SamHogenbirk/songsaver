import { createSlice } from "@reduxjs/toolkit";

let isSorted = false


const songSlice = createSlice({

	name: "songs",
	initialState: [
		{ id: "1", title: "White Shadows", artist: "Coldplay", genre: "Pop", rating: "c" },
		{ id: "2", title: "Bigger Than Prince", artist: "Green Velvet", genre: "House", rating: "e" },
		{ id: "3", title: "Smells like teen spirit", artist: "Nirvana", genre: "Rock", rating: "noRating" }],

	reducers: {

		addSong: (state, action) => {

			const ac = action.payload
			const newSong = {
				id: ac.id,
				title: ac.title,
				artist: ac.artist,
				genre: ac.genre,
				rating: ac.rating
			}
			state.push(newSong)
		},

		sortSong: (songs, action) => {

			const res = isSorted ? songs.reverse() : songs.sort((a, b) => (a[action.payload] < b[action.payload] ? -1 : 1))
			isSorted = !isSorted
			return res
		},

		filterSongs: () => { },

		deleteSong: (songs, action) => {

			return songs.filter((songs) => songs.id !== action.payload.id)
		}
	}

});

export const { addSong, sortSong, filterSongs, deleteSong } = songSlice.actions

export default songSlice.reducer;