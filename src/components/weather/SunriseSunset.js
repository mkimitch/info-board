import React, { useState, useEffect } from 'react'
import { useWeatherData } from './WeatherContext'

export default function SunriseSunset() {
	const { weatherData } = useWeatherData()
	const [sunrise, setSunrise] = useState()
	const [sunset, setSunset] = useState()

	useEffect(() => {
		setSunrise(weatherData.current?.sunrise)
		setSunset(weatherData.current?.sunset)
	}, [weatherData])

	return (
		<>
			Sunrise: {sunrise} Sunset: {sunset}
		</>
	)
}
