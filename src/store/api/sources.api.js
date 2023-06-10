import React from 'react';
import {NewsApi} from "./NewsAPI";

const apiKey = "2af82ba10a2441b595ea3d49af5c061e";

export const sourcesApi = NewsApi.injectEndpoints({
	endpoints:(build) => ({
		getSourcesNews:build.query({
			 	query:({sources}) =>`?sources=${sources}&apiKey=${apiKey}`
			 })
	})
})

export const {useGetSourcesNewsQuery} = sourcesApi