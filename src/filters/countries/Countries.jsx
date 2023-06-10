import React from 'react';
import {countries} from "../filters";
import s from "./Countries.module.scss"

const Countries = ({selectedCountry, setSelectedCountry}) => {
	return (
		<div className={s.countries_container}>
			{countries.map((item) => (
				<div className={s.country_container} key={item.name}>
					<img src={item.img} className={`${s.country_item} ${selectedCountry === item ? s.active : ''}`} onClick={()=>setSelectedCountry(item)} alt={'Flag'} />
					</div>
			))}
		</div>
	);
};

export default Countries;