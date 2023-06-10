import React from 'react';
import s from "../../home/newsSlice/NewsSlice.module.scss";
import image from "../../../img/paper.jpg";


const SourcesNews = ({data,isLoading}) => {
		return (
			<div className={s.news_container}>
				{isLoading ? <div>...loading</div> :
					data ? data.articles.map((item) => (
						<div className={s.news_block} key={item.id}>
							<div className={s.news_item}>
								<h3>{item.title}</h3>
								<h6>{item.description}</h6>
								{item.urlToImage ? <img src={item.urlToImage} alt={"image"}/> : <img src={image} alt={"..."}/>}
								<a href={item.url} target={"_blank"}>more</a>
							</div>
						</div>
					)) : ''
				}

			</div>
		);
	};


export default SourcesNews;