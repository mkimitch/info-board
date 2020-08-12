import React, { useState, useEffect } from 'react'
import moment from 'moment'
import { useWeatherData } from './WeatherContext'

export default function SunriseSunset() {
	const { weatherData } = useWeatherData()
	const [sunrise, setSunrise] = useState()
	const [sunset, setSunset] = useState()

	useEffect(() => {
		setSunrise(moment.unix(weatherData.current?.sunrise).format('LT'))
		setSunset(moment.unix(weatherData.current?.sunset).format('LT'))
	}, [weatherData])

	return (
		<>
			Sunrise: {sunrise} Sunset: {sunset}
		</>
	)
}
