import React, { useState, useEffect } from 'react'
import { useGlobalStore } from '../Store'

export default function Condition() {
	const { globalStore } = useGlobalStore()
	const [weatherIcon, setWeatherIcon] = useState()
	const [weatherIconAlt, setWeatherIconAlt] = useState()

	useEffect(() => {
		setWeatherIcon(globalStore.openWeatherJSON.current?.weather[0].icon)
		setWeatherIconAlt(
			globalStore.openWeatherJSON.current?.weather[0].description
		)
	}, [globalStore.openWeatherJSON])
	return (
		<>
			<img
				src={`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
				alt={weatherIconAlt}
			/>
		</>
	)
}
