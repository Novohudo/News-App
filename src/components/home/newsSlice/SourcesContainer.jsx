import React, {useState} from 'react';
import s from "../Home.module.scss";
import Sources from "../sources/Sources";
import {useGetSourcesNewsQuery} from "../../../store/api/sources.api";
import NewsSlice from "./NewsSlice";
import {useActions} from "../../../hooks/useActions";

const SourcesContainer = () => {
	const {toggleFavorites} = useActions();
	const [sources, setSources] = useState('');
	const {data,isLoading} = useGetSourcesNewsQuery({sources})

	return (
		<div className={s.main}>
			<div className={s.container}>
				<div className={s.filters_container}>
					<div className={s.filters}>
						<Sources setSources={setSources}/>
					</div>
				</div>
				{sources ? <p className={s.source}>{sources}</p> : <h2>choose source</h2>}
				<NewsSlice toggleFavorites={toggleFavorites} data={data} isLoading={isLoading}/>
			</div>
		</div>
	);
};

export default SourcesContainer;