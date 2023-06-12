import React from 'react';
import s from "./NewsSlice.module.scss";
import image from "../../../img/paper.jpg"


const NewsSlice = (props) => {

	return (
		<div className={s.news_container}>
			{props.isLoading ?
				<div>...Loading</div> :
				props.data ? props.data.articles.map(item => (
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
								<button onClick={() => props.toggleFavorites(item)}>add to favorites</button>
							</div>
					</div>
				)) : ''
			}
		</div>
	)
};

export default NewsSlice;

