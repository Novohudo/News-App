import {useEffect, useState} from "react";

const SourcesNewsAPI = ({sources, children}) => {
	const [sourcesNews, setSourcesNews] = useState([]);
	useEffect(() => {
		const fetchNews = async () => {
			try {
				const apiKey = "2af82ba10a2441b595ea3d49af5c061e";
				const response = await fetch(`https://newsapi.org/v2/top-headlines?sources=${sources}&apiKey=${apiKey}`)
				const data = await response.json();
				setSourcesNews(data.articles)
			} catch (error) {
				console.log("error fetching", error)
			}
		};
		fetchNews();
	}, [sources]);
	return (
		<>
			{children(sourcesNews)}
		</>
	)
}

export default SourcesNewsAPI;