import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../store/favorites.slice";

const Favorites = () => {
	const { favorites } = useSelector(state => state);
	const dispatch = useDispatch();

	const handleDelete = (itemId) => {
		dispatch(actions.deleteFromFavorites(itemId));
	};

	return (
		<div>
			{favorites.map((item) => (
				<div>
					<h2>{item.title}</h2>
					<button onClick={() => handleDelete(item.id)}>Delete</button>
				</div>
			))}
		</div>
	);
};

export default Favorites;