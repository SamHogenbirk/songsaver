import React from "react"
import ListItem from "./ListItems"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { sortSong } from "../features/songSlice"

const emo = {

    a: "0x1F4A9",
    b: "0x1F641",
    c: "0x1F610",
    d: "0x1F642",
    e: "0x1F60D",
    noRating: "0x1F636"
}

const convertEmo = (emo) => String.fromCodePoint(emo)

const List = () => {

    const songs = useSelector((state) => state.song)
    const dispatch = useDispatch()

    const handleSort = (e) => {
        e.preventDefault()
        dispatch(sortSong(e.target.dataset.name))

    }

    return (

        <div className="song-list">

            <table style={{ width: "100%" }}>
                <thead>
                    <tr >
                        <th className="song-header unselectable"
                            onClick={(e) => handleSort(e)}
                            data-name="title">Song</th>

                        <th className=" song-header unselectable"
                            onClick={(e) => handleSort(e)}
                            data-name="artist">Artist</th>

                        <th className=" song-header unselectable"
                            onClick={(e) => handleSort(e)}
                            data-name="genre">Genre</th>


                        <th className=" song-header unselectable"
                            onClick={(e) => handleSort(e)}
                            data-name="rating">Rating</th>
                    </tr>
                </thead>

                <tbody>
                    {songs.map((item) =>

                        <ListItem
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            artist={item.artist}
                            genre={item.genre}
                            rating={convertEmo(emo[item.rating])} />
                    )}
                </tbody>
            </table>
        </div>

    )

}

export default List