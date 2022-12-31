import React from "react"
import { useDispatch } from "react-redux"
import { deleteSong } from "../features/songSlice"


const ListItems = ({ id, title, artist, genre, rating }) => {

	const dispatch = useDispatch()

	const handleDel = () => {
		dispatch(deleteSong({ id }))
	};

	return (

		<tr key={id} className="song-row">
			<td>{title}</td>
			<td>{artist}</td>
			<td>{genre}</td>
			<td>{rating}
				<span
					onClick={handleDel}
					className="delete">🚫
				</span>
			</td>

		</tr>

	);
}

export default ListItems