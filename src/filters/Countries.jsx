import React from 'react';
import {countries} from "./filters";
import s from "./Countries.module.scss"

const Countries = ({setSelectedCountry}) => {
	return (
		<div className={s.countries_container}>
			{countries.map((item)=>(
				<span className={s.country_item} onClick={()=>setSelectedCountry(item)}>{item.name}</span>
			))}
		</div>
	);
};

export default Countries;