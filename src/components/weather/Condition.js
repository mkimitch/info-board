import React, { useEffect } from 'react'
import { useWeatherData } from './WeatherContext'

export default function Condition() {
	const { weatherData } = useWeatherData()

	return (
		<>
			<img
				src={`http://openweathermap.org/img/wn/${weatherData.current?.weather[0].icon}@2x.png`}
				alt={weatherData.current?.weather[0].description}
			/>
		</>
	)
}
