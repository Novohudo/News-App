import React from 'react';
import s from './Weather.module.scss';

export const Weather = ({weatherData}) => (
	<div className={s.main}>
		<div className={s.top}>
			<p className={s.header}>{weatherData.name}</p>
		</div>
		<div className={s.flex}>
			<p className={s.temp}>Temperature: {weatherData.main.temp} &deg;C</p>
			<p className={s.temp}>Humidity: {weatherData.main.humidity} %</p>
		</div>
		<div className={s.flex}>
			<p
				className={s.sunrise_sunset}>Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('pl-IN')}</p>
			<p className={s.sunrise_sunset}>Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('pl-IN')}</p>
		</div>
		<p className={s.description}>
			{weatherData.weather[0].main}
			<img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`} alt="Weather Icon" />
		</p>

	</div>
)