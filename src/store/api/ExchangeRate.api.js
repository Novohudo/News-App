import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";

const apiKey = process.env.REACT_APP_EXCHANGE_API_KEY;

export const ExchangeApi = createApi({
	reducerPath: 'exchangeApi',
	tagTypes: ['Rates'],
	baseQuery: fetchBaseQuery({baseUrl: `https://v6.exchangerate-api.com/v6/${apiKey}/latest`}),
	endpoints: (build) => ({
		getRates: build.query({
			query: () => `/PLN`
		}),
	})
})

export const {useGetRatesQuery} = ExchangeApi