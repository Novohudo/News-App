import React from 'react';
import {useGetRatesQuery} from "../../../store/api/ExchangeRate.api";
import s from "./ExchangeComponent.module.scss"
import eur from "../../../img/countries/EU.svg"
import usa from "../../../img/countries/us.svg"
import uah from "../../../img/countries/ua.svg"
import pl from "../../../img/countries/pl.svg"

const ExchangeComponent = () => {
	const {data} = useGetRatesQuery();

	const fallbackData = {
		base_code: 'PLN',
		conversion_rates: {
			USD: 0,
			EUR: 0,
			UAH: 0,
		}
	}
	const roundedConversationRates = {
		USD: data ? Math.round(data.conversion_rates.USD * 100) / 100 : fallbackData.conversion_rates.USD,
		EUR: data ? Math.round(data.conversion_rates.EUR * 100) / 100 : fallbackData.conversion_rates.EUR,
		UAH: data ? Math.round(data.conversion_rates.UAH * 100) / 100 : fallbackData.conversion_rates.UAH,
	}

	return (
		<div className={s.block}>
			<div className={s.main_rate}><img src={pl} alt={'pl'}/> {data ? data.base_code : fallbackData.base_code}</div>
			<div className={s.conversion}>
				<div><img src={usa} alt={'usa'}/> USD : {roundedConversationRates.USD}</div>
				<div><img src={eur} alt={'eur'}/> EUR : {roundedConversationRates.EUR}</div>
				<div><img src={uah} alt={'uah'}/> UAH : {roundedConversationRates.UAH}</div>
			</div>
		</div>
	);
};

export default ExchangeComponent;