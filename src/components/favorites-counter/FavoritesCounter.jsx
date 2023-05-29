import React from 'react';
import {BsBookmarkHeart} from "react-icons/bs";
import s from './FavoritesCounter.module.css'
import {useFavorites} from "../../hooks/useFavorites";

const FavoritesCounter = () => {
	const {favorites} = useFavorites();
	return (
		<div className={s.counter}>
			<BsBookmarkHeart size={24}/>
			<span>{favorites.length}</span>
		</div>
	);
};

export default FavoritesCounter;