import React from 'react';
import s from "./NewsSlice.module.scss";
import image from "../../../img/paper.jpg"
import {useGetNewsQuery} from "../../../store/api/NewsAPI";
import {useActions} from "../../../hooks/useActions";

const NewsSlice = ({selectedCountry, selectedCategory}) => {
	const {toggleFavorites} = useActions();
	const {data,isLoading} = useGetNewsQuery({selectedCountry, selectedCategory});

	return (
		<div className={s.news_container}>
			{isLoading ?
				<div>...Loading</div> :
				data ? data.articles.map(item => (
					<div className={s.news_block} key={item.title}>
						<div className={s.news_title}>
							<p>{item.title}</p>
							<span>{item.description}...</span>
						</div>
							<div className={s.news_image}>
								{item.urlToImage ? <img src={item.urlToImage} alt={"image"}/> : <img src={image} alt={"..."}/>}
							</div>
							<div className={s.news_actions}>
								<a href={item.url} target={"_blank"}>see more ..</a>
								<button onClick={() => toggleFavorites(item)}>add to favorites</button>
							</div>
					</div>
				)) : <div>data not found</div>
			}
		</div>
	)
};

export default NewsSlice;

