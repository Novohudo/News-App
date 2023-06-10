import React, {useState} from 'react';
import s from "../home/Home.module.scss";
import SourcesNews from "./sourcesNews/SourcesNews";
import Sources from "../../filters/sources/Sources";
import {useGetSourcesNewsQuery} from "../../store/api/sources.api";

const TopSources = () => {
	const [sources, setSources] = useState('');
	const {data,isLoading} = useGetSourcesNewsQuery({sources})
	console.log(data)
	return (
		<div className={s.main}>
			<div className={s.container}>
				<div className={s.filters_container}>
					<div className={s.filters}>
						<Sources setSources={setSources}/>
					</div>
				</div>
				<hr/>
				{sources ? <p>{sources}</p> : <h2>choose source</h2>}
				<div className={s.news_container}>
				<SourcesNews data={data} isLoading={isLoading}/>
				</div>
			</div>
		</div>
	);
};

export default TopSources;