import React, { useState, useEffect } from 'react'
import moment from 'moment'
import tz from 'moment-timezone'
import { useWeatherData } from './WeatherContext'

export default function SunriseSunset() {
	const { weatherData } = useWeatherData()
	const [sunrise, setSunrise] = useState()
	const [sunset, setSunset] = useState()

	useEffect(() => {
		setSunrise(
			moment.tz(weatherData.current?.sunrise, 'America/Chicago').format('LTS')
		)
		setSunset(
			moment.tz(weatherData.current?.sunset, 'America/Chicago').format('LTS')
		)
	}, [weatherData])

	return (
		<>
			Sunrise: {sunrise} Sunset: {sunset}
		</>
	)
}
