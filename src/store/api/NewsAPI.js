
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";

const apiKey = process.env.REACT_APP_NEWS_SLICE_API_KEY;

export const NewsApi = createApi({
	reducerPath: 'newsApi',
	tagTypes: ['News'],
	baseQuery: fetchBaseQuery({baseUrl: `https://newsapi.org/v2/top-headlines`}),
	endpoints: (build) => ({
		getNews:build.query({
			query:({selectedCountry, selectedCategory}) => `?country=${selectedCountry.code}&category=${selectedCategory}&apiKey=${apiKey}`
		}),
	})
})

export const {useGetNewsQuery} = NewsApi
