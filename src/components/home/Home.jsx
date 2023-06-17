import React, {useState} from 'react';
import s from './Home.module.scss';
import NewsSlice from "./newsSlice/NewsSlice";
import Categories from "../../filters/categories/Categories";
import Countries from "../../filters/countries/Countries";
import NewsContainer from "./newsSlice/NewsContainer";
import ExchangeComponent from "../exchange/ExchangeComponent";

const Home = () => {
	const [selectedCountry, setSelectedCountry] = useState({code: 'ua', name: 'Ukraine'});
	const [selectedCategory, setSelectedCategory] = useState('');

	return (
		<div className={s.main}>
			<div className={s.container}>
					<div className={s.filters}>
						<div className={s.filters_container}>
							<Countries selectedCountry={selectedCountry} setSelectedCountry={setSelectedCountry}/>
							<Categories selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
						</div>
						<div className={s.exchange_container}>
							<ExchangeComponent/>
						</div>
					</div>
				<h3>News fromm <span>{selectedCountry.name}</span> in category <span>{selectedCategory}</span></h3>
				<div className={s.news_container}>
					<NewsContainer selectedCategory={selectedCategory} selectedCountry={selectedCountry}/>
				</div>
			</div>
		</div>
	);
};

export default Home;