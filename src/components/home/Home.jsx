import React, {useState} from 'react';
import s from './Home.module.scss';
import NewsSlice from "../newsSlice/NewsSlice";
import Categories from "../../filters/Categories";
import Countries from "../../filters/Countries";

const Home = () => {
	const [selectedCountry, setSelectedCountry] = useState({code: 'ua', name: 'Ukraine'});
	const [selectedCategory, setSelectedCategory] = useState("general");

	return (
		<div className={s.main}>
			<div className={s.container}>
				<div className={s.filters_container}>
					<div className={s.filters}>
						<details open>
							<summary>CHOOSE A COUNTRY</summary>
							<Countries setSelectedCountry={setSelectedCountry}/>
						</details>
						<details open>
							<summary>CHOOSE A CATEGORY</summary>
							<Categories setSelectedCategory={setSelectedCategory}/>
						</details>
					</div>
				</div>
				<hr/>
				<h3>News fromm {selectedCountry.name} in category {selectedCategory}</h3>
				<div className={s.news_container}>
					<NewsSlice selectedCategory={selectedCategory} selectedCountry={selectedCountry}/>
				</div>
			</div>
		</div>
	);
};

export default Home;