import React, { useState, useEffect } from 'react'
import { useGlobalStore } from '../Store'

export default function Condition() {
	const { globalStore } = useGlobalStore()
	const [weatherIcon, setWeatherIcon] = useState()
	const [weatherIconAlt, setWeatherIconAlt] = useState()

	useEffect(() => {
		setWeatherIcon(globalStore.openWeatherJSON.current?.weather[0].id)
		setWeatherIconAlt(
			globalStore.openWeatherJSON.current?.weather[0].description
		)
	}, [globalStore.openWeatherJSON])

	return (
		<>
			{weatherIcon && (
				<i
					className={`wi wi-owm-${weatherIcon}`}
					aria-label={weatherIconAlt}
				></i>
			)}
		</>
	)
}
