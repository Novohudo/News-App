import React from 'react';
import s from './Nav.module.scss'
import {NavLink} from "react-router-dom";
import {useFavorites} from "../../hooks/useFavorites";


const Nav = () => {
	const {favorites} = useFavorites()
	return (
		<nav className={s.nav}>
			<div className={s.nav_container}>
				<NavLink to="" className={({isActive})=>(isActive ? s.active : "")}>Home</NavLink>
				<NavLink to="/topSources" className={({isActive}) => (isActive ? s.active : "")}>Top</NavLink>
				<NavLink to="/favorites" className={({isActive}) => (isActive ? s.active : "")}>Favorites {favorites.length === 0 ? '' : favorites.length}</NavLink>
				<NavLink to="/about" className={({isActive}) => (isActive ? s.active : "")}>About</NavLink>
			</div>
		</nav>
	);
};

export default Nav;