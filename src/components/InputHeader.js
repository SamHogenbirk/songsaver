import React from "react"
import { useState } from "react"
import { addSong } from "../features/songSlice"
import { useDispatch } from "react-redux"

const InputHeader = () => {

    const [songs, setSongs] = useState({ title: "", artist: "", genre: "", rating: "" })

    const dispatch = useDispatch()

    const handleChange = (e) => {
        const { name, value } = e.target
        const newSong = { ...songs }
        newSong[name] = value
        setSongs(newSong)

    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (songs.title.length && songs.artist.length) {
            dispatch(addSong({
                id: parseInt(Math.floor(Math.random() * Date.now()).toString().replace(".", "")),
                title: songs.title,
                artist: songs.artist,
                genre: songs.genre,
                rating: songs.rating
            }))
        } else { alert("please enter song and artist") }

        setSongs({ title: "", artist: "", genre: "", rating: "" })
    }

    return (
        <header>
            <form onSubmit={handleSubmit}>
                <label>Title:
                    <input
                        type="text"
                        name="title"
                        onChange={handleChange}
                        value={songs.title}
                    ></input>
                </label>

                <label>Artist:
                    <input
                        type="text"
                        name="artist"
                        onChange={handleChange}
                        value={songs.artist}
                    ></input>
                </label>

                <label>Genre:
                    <select
                        value={songs.genre}
                        onChange={handleChange}
                        name="genre"
                    >
                        <option value="">--please choose--</option>
                        <option value="rock">Rock</option>
                        <option value="house">House</option>
                        <option value="pop">Pop</option>
                    </select>
                </label>

                <label>Rating:
                    <select
                        value={songs.rating}
                        onChange={handleChange}
                        name="rating"
                    >
                        <option value="">--please choose--</option>
                        <option value="a">💩</option>
                        <option value="b">🙁</option>
                        <option value="c">😐</option>
                        <option value="d">🙂</option>
                        <option value="e">😍 </option>
                    </select>
                </label>

                <button>add song</button>
            </form>
        </header>

    )

}

export default InputHeader