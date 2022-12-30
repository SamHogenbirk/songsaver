import { createSlice } from "@reduxjs/toolkit";

let isSorted = false

// { id: "1", title: "a", artist: "z", genre: "a", rating: "b" },
// { id: "2", title: "z", artist: "a", genre: "z", rating: "e" },
// { id: "3", title: "d", artist: "c", genre: "t", rating: "a" },
// { id: "4", title: "d", artist: "c", genre: "t", rating: "d" },
// { id: "5", title: "d", artist: "c", genre: "t", rating: "c" }


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
				rating: ac.rating
			}
			state.push(newSong)
		},

		sortSong: (songs, action) => {

			const res = isSorted ? songs.reverse() : songs.sort((a, b) => (a[action.payload] < b[action.payload] ? -1 : 1))
			isSorted = !isSorted
			return res
		},

		deleteSong: (songs, action) => {

			return songs.filter((songs) => songs.id !== action.payload.id)
		}
	}

});

export const { addSong, sortSong, deleteSong } = songSlice.actions

export default songSlice.reducer;