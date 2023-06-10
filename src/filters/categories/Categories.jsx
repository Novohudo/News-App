import React from 'react';
import {categories} from "../filters";
import s from "./Categories.module.scss"

const Categories = ({selectedCategory,setSelectedCategory}) => {
	return (
		<div className={s.categories_container}>
			{categories.map((item)=>(
				<span key={item.id} className={`${s.category_item} ${selectedCategory === item.name ? s.active : ''}`} onClick={()=>setSelectedCategory(item.name)}>{item.name}</span>
			))}
		</div>
	);
};

export default Categories;