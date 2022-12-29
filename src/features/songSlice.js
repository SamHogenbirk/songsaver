import { createSlice } from "@reduxjs/toolkit";

const emo = {
	1: "0x1F4A9",
	2: "0x1F641",
	3: "0x1F610",
	4: "0x1F642",
	5: "0x1F60D"
}

const convertEmo = (emo) => String.fromCodePoint(emo)


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
		},

		deleteSong: (songs, action) => {

			return songs
				.map(item => item)//new array
				.filter((songs) => songs.id !== action.payload.id)
		}
	}

});

export const { addSong, deleteSong } = songSlice.actions

export default songSlice.reducer;