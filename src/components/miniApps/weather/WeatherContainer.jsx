import React, {useEffect, useState} from 'react';
import {Weather} from "./Weather";

const WeatherContainer = () => {
	const [lat, setLat] = useState(null);
	const [long, setLong] = useState(null);
	const [data, setData] = useState([]);

	const apiKey = process.env.REACT_APP_API_KEY;
	const baseUrl = process.env.REACT_APP_API_URL;

	useEffect(() => {
		const fetchData = async () => {
			if (lat !== null && long !== null) {
				const response = await fetch(`${baseUrl}/weather?lat=${lat}&lon=${long}&units=metric&appid=${apiKey}`);
				const result = await response.json();
				setData(result);
			}
		};
		fetchData();
	}, [lat, long]);
	console.log(data)

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(function (position) {
			setLat(position.coords.latitude);
			setLong(position.coords.longitude);
		})
	}, [])

	return (
		<div>
			{(typeof data.main != 'undefined') ? (
				<Weather weatherData={data}/>
			) : (<div>Loading...</div>)}
		</div>
	)
};

export default WeatherContainer;