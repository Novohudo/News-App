import React from 'react';
import {categories} from "./filters";
import s from "./Categories.module.scss"

const Categories = ({setSelectedCategory}) => {
	return (
		<div className={s.categories_container}>
			{categories.map((item)=>(
				<span className={s.category_item} onClick={()=>setSelectedCategory(item)}>{item}</span>
			))}
		</div>
	);
};

export default Categories;