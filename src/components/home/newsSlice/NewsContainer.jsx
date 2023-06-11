import React from 'react';
import {useActions} from "../../../hooks/useActions";
import {useGetNewsQuery} from "../../../store/api/NewsAPI";
import NewsSlice from "./NewsSlice";

const NewsContainer = () => {
	const {toggleFavorites} = useActions();
	const {data,isLoading} = useGetNewsQuery({selectedCountry, selectedCategory});

	return (
		<NewsSlice
			toggleFavorites={toggleFavorites}
			selectedCategory={selectedCategory}
			selectedCountry={selectedCountry}
		/>
	);
};

export default NewsContainer;