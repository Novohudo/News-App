import React from 'react';
import s from "./Sources.module.scss";
import {sources} from "./filters";

const Sources = ({setSources}) => {
	return (
		<div className={s.sources_container}>
			<h3>Top Sources</h3>
			<div className={s.sources_row}>
				{sources.map((item) => (
					<span className={s.source_item} onClick={() => setSources(item.name)}><img src={item.img} alt={"..."}/></span>
				))}
			</div>
		</div>
	);
};

export default Sources;