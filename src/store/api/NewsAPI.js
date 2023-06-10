
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";

const apiKey = "2af82ba10a2441b595ea3d49af5c061e";

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
