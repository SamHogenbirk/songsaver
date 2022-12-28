import React from "react"
import { useState } from "react"
import { addSong } from "../features/songSlice"
import { useDispatch } from "react-redux"

const emo = {
    1: "0x1F4A9",
    2: "0x1F641",
    3: "0x1F610",
    4: "0x1F642",
    5: "0x1F60D"
}

const InputHeader = () => {

    const [songs, setSongs] = useState({})

    const dispatch = useDispatch()

    const convertEmo = (emo) => String.fromCodePoint(emo)

    const handleChange = (e) => {
        const { name, value } = e.target
        const newSong = { ...songs }
        newSong[name] = value
        console.log(newSong)
        setSongs(newSong)

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(songs.title)
        // dispatch(addSong({}))
    }

    return (
        <header>
            <form onSubmit={handleSubmit}>
                <label>Title:
                    <input
                        type="text"
                        name="title"
                        onChange={handleChange}
                    ></input>
                </label>

                <label>Artist:
                    <input
                        type="text"
                        name="artist"
                        onChange={handleChange}
                    >

                    </input>
                </label>

                <label>Genre:
                    <select
                        value={songs.genre}
                        onChange={handleChange}
                        name="genre"
                    >
                        <option value="">--please choose an option--</option>
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
                        <option value="">--please choose an option--</option>
                        <option value="1">{convertEmo(emo[1])}</option>
                        <option value="2">{convertEmo(emo[2])}</option>
                        <option value="3">{convertEmo(emo[3])}</option>
                        <option value="4">{convertEmo(emo[4])}</option>
                        <option value="5">{convertEmo(emo[5])}</option>
                    </select>
                </label>

                <button>add song</button>
            </form>
        </header>

    )

}

export default InputHeader