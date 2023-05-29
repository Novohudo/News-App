import React from 'react';
import {useActions} from "../../hooks/useActions";
import {useFavorites} from "../../hooks/useFavorites";

const Favorites = () => {
	const { favorites } = useFavorites()
	const { deleteFromFavorites } = useActions();

	return (
		<div>
			{favorites.map((item) => (
				<div>
					<h2>{item.title}</h2>
					<button onClick={() => deleteFromFavorites(item.id)}>Delete</button>
				</div>
			))}
		</div>
	);
};

export default Favorites;