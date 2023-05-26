import React from 'react';
import s from "./NewsSlice.module.scss";
import image from "../../img/paper.jpg"
import NewsAPI from "../../API/NewsAPI";
import {useDispatch, useSelector} from "react-redux";
import {actions} from "../../store/favorites.slice";

const NewsSlice = ({selectedCountry, selectedCategory}) => {
	const {favorites} = useSelector(state => state);
	const dispatch = useDispatch();
	console.log(favorites)

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
							<button onClick={()=> dispatch(actions.toggleFavorites(item))}>add to favorites</button>
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

