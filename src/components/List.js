import React from "react"
import { useState } from "react"
import ListItem from "./ListItems"
import { useSelector } from "react-redux"



const List = () => {

    const [songs, setSongs] = useState(useSelector((state) => state.song));

    const handleSort = (e) => {
        e.preventDefault()
        let sorted = false
        const { name } = e.target.dataset.name
        sorted ? setSongs.reverse() : setSongs([...songs].sort((a, b) => (a[name] < b[name] ? 1 : -1)))
        sorted = !sorted
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