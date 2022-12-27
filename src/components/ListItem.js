import React from "react"


const ListItem = ({ id, title, artist, genre, rating }) => {

	return (

	<tr key={id}>
		<td>{title}</td>
		<td>{artist}</td>
		<td>{genre}</td>
		<td>{rating}</td>
	</tr>
	
	)}
	

	export default ListItem