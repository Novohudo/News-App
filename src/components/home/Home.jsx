import React, {useState} from 'react';
import s from './Home.module.scss';
import NewsSlice from "./newsSlice/NewsSlice";
import Categories from "../../filters/categories/Categories";
import Countries from "../../filters/countries/Countries";

const Home = () => {
	const [selectedCountry, setSelectedCountry] = useState({code: 'ua', name: 'Ukraine'});
	const [selectedCategory, setSelectedCategory] = useState('');

	return (
		<div className={s.main}>
			<div className={s.container}>
				<div className={s.filters_container}>
					<div className={s.filters}>
							<Countries selectedCountry={selectedCountry} setSelectedCountry={setSelectedCountry}/>
							<Categories selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
					</div>
				</div>
				<h3>News fromm {selectedCountry.name} in category {selectedCategory}</h3>
				<div className={s.news_container}>
					<NewsSlice selectedCategory={selectedCategory} selectedCountry={selectedCountry}/>
				</div>
			</div>
		</div>
	);
};

export default Home;