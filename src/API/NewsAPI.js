import React, {useEffect, useState} from 'react';

const NewsApi = ({selectedCountry,selectedCategory,children}) => {
	const [news, setNews] = useState([]);
	useEffect(() => {
		const fetchNews = async () => {
			try {
				const apiKey = "2af82ba10a2441b595ea3d49af5c061e";
				const response = await fetch(`https://newsapi.org/v2/top-headlines?country=${selectedCountry.code}&category=${selectedCategory}&apiKey=${apiKey}`,)
				const data = await response.json();
				setNews(data.articles);
			} catch (error) {
				console.log("Error fetching", error);
			}
		}
		fetchNews();

	}, [selectedCountry, selectedCategory])
	return (
		<>
			{children(news)}
		</>
	);
};

export default NewsApi;