import React from "react"
import ListItem from "./ListItem"
import { useSelector } from "react-redux"

const List = () => {
    const songs = useSelector((state) => state.song)

    return (

        <div className="song-list">

            <table style={{ width: "100%" }}>
                <thead>
                    <tr className="song-header">
                        <th className="song-row">Song</th>
                        <th className="song-row">Artist</th>
                        <th className="song-row">Genre</th>
                        <th className="song-row">Rating</th>
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