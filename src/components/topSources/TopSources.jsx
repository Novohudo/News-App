import React, {useState} from 'react';
import s from "../home/Home.module.scss";
import SourcesNews from "../sourcesNews/SourcesNews";
import Sources from "../../filters/Sources";

const TopSources = () => {
	const [sources, setSources] = useState(null);
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
				<SourcesNews sources={sources}/>
				</div>
			</div>
		</div>
	);
};

export default TopSources;