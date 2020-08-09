import React, { useState, useEffect } from 'react'
import { useWeatherData } from './WeatherContext'

export default function Temperature(props) {
	const [tempType, setTempType] = useState(props.data)
	const { weatherData } = useWeatherData()

	useEffect(() => {
		setTempType(props.data)
	}, [props.data])

	return (
		<>
			{tempType === 'current' && Math.round(weatherData.current?.temp)}
			{tempType === 'feelsLike' && Math.round(weatherData.current?.feels_like)}℉
		</>
	)
}
