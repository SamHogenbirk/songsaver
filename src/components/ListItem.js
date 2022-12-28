import React from "react"
import { useDispatch } from "react-redux"
import { deleteSong } from "../features/songSlice"


const ListItem = ({ id, title, artist, genre, rating }) => {

	const dispatch = useDispatch()

	const handleDel = () => {
		console.log(title)
		dispatch(deleteSong({ id }))
	};

	return (

		<tr key={id}>
			<td>{title}</td>
			<td>{artist}</td>
			<td>{genre}</td>
			<td>{rating}</td>
			<td>
				<button
					className="delete"
					onClick={handleDel}>
					delete
				</button>
			</td>
		</tr>

	);
}



export default ListItem