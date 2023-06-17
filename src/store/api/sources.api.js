import React from 'react';
import {NewsApi} from "./NewsAPI";

const apiKey = process.env.REACT_APP_NEWS_SLICE_API_KEY;

export const sourcesApi = NewsApi.injectEndpoints({
	endpoints:(build) => ({
		getSourcesNews:build.query({
			 	query:({sources}) =>`?sources=${sources}&apiKey=${apiKey}`
			 })
	})
})

export const {useGetSourcesNewsQuery} = sourcesApi