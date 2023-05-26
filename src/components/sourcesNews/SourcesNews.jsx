import React from 'react';
import s from "../newsSlice/NewsSlice.module.scss";
import image from "../../img/paper.jpg";
import SourcesNewsAPI from "../../API/SourcesNewsAPI";

const SourcesNews = ({sources}) => {
	const renderNews = (sourcesNews) => {
		return (
			<div className={s.news_container}>
				{sourcesNews.map((item) => (
					<div className={s.news_block} key={item.id}>
						<div className={s.news_item}>
							<h3>{item.title}</h3>
							<h6>{item.description}</h6>
							{item.urlToImage ? <img src={item.urlToImage} alt={"image"}/> : <img src={image} alt={"..."}/>}
							<a href={item.url} target={"_blank"}>more</a>
						</div>
					</div>
				))}
			</div>
		);
	};
	return (
		<SourcesNewsAPI sources={sources}>
			{renderNews}
		</SourcesNewsAPI>
	)

};

export default SourcesNews;