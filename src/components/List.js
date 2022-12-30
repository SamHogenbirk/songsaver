import React, { useEffect } from "react"
import ListItem from "./ListItems"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { sortSong } from "../features/songSlice"



const List = () => {

    const songs = useSelector((state) => state.song)
    const dispatch = useDispatch()


    const handleSort = (e) => {

        e.preventDefault()
        dispatch(sortSong(songs))
        // console.log(e)
        // let sorted = false
        // const { name } = e.target.dataset.name
        // return [...songs].sort((a, b) => (a[name] < b[name] ? 1 : -1))
    }


    return (

        <div className="song-list">

            <table style={{ width: "100%" }}>
                <thead>
                    <tr className="song-header">
                        <th className="song-row"
                            onClick={(e) => handleSort(e)}
                            data-name="title">Song</th>

                        <th className="song-row"
                            onClick={(e) => handleSort(e)}
                            data-name="artist">Artist</th>

                        <th className="song-row"
                            onClick={(e) => handleSort(e)}
                            data-name="genre">Genre</th>

                        <th className="song-row"
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
                            rating={item.rating} />
                    )}
                </tbody>
            </table>
        </div>

    )

}

export default List