import React from 'react';
import s from './Nav.module.scss'
import {NavLink} from "react-router-dom";
import FavoritesCounter from "../favorites-counter/FavoritesCounter";


const Nav = () => {
	return (
		<nav className={s.nav}>
			<FavoritesCounter/>
			<div className={s.nav_container}>
				<NavLink to="" className={({isActive})=>(isActive ? s.active : "")}>Home</NavLink>
				<NavLink to="/newsCategories" className={({isActive}) => (isActive ? s.active : "")}>Top</NavLink>
				<NavLink to="/favorites" className={({isActive}) => (isActive ? s.active : "")}>Favorites</NavLink>
				<NavLink to="/about" className={({isActive}) => (isActive ? s.active : "")}>About</NavLink>
			</div>
		</nav>
	);
};

export default Nav;