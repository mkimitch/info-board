import React, { useState, useEffect, Suspense } from 'react'
// import weather from '../api/weather'
import CurrentWeather from './CurrentWeather'

const weatherApiString = `https://api.openweathermap.org/data/2.5/weather?zip=55044&units=imperial&appid=${process.env.REACT_APP_WEATHER_DEFAULT_API_KEY}`

export default function Weather({ zip }) {
	const [weatherData, setWeatherData] = useState(null)

	useEffect(() => {
		getWeatherData()
		async function getWeatherData() {
			const results = await fetch(weatherApiString)
			const data = await results.json()
			console.log(data)
			setWeatherData(data)
		}
	}, [zip])

	return (
		<div>
			<Suspense fallback={'Loading...'}>
				<div>Current Condition</div>
				{weatherData?.main && <CurrentWeather data={weatherData?.main} />}
				<img
					src={`http://openweathermap.org/img/wn/${weatherData?.weather[0].icon}@2x.png`}
					alt={weatherData?.weather[0].description}
				/>
			</Suspense>
		</div>
	)
}
