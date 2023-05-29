import React from 'react';
import s from "./NewsSlice.module.scss";
import image from "../../img/paper.jpg"
import NewsAPI from "../../api/NewsAPI";
import {useActions} from "../../hooks/useActions";

const NewsSlice = ({selectedCountry, selectedCategory}) => {
	const {toggleFavorites} = useActions();

	const renderComponent = (news) => {
		return (
			<div className={s.news_container}>
				{news.map((item) => (
					<div className={s.news_block} key={item.id}>
						<div className={s.news_item}>
							<h3>{item.title}</h3>
							<h6>{item.description}</h6>
							{item.urlToImage ? <img src={item.urlToImage} alt={"image"}/> : <img src={image} alt={"..."}/>}
							<a href={item.url} target={"_blank"}>more</a>
							<button onClick={()=> toggleFavorites(item)}>add to favorites</button>
						</div>
					</div>
				))}
			</div>
		)
	};
	return (
		<NewsAPI selectedCategory={selectedCategory} selectedCountry={selectedCountry}>
			{renderComponent}
		</NewsAPI>
	)

};

export default NewsSlice;

