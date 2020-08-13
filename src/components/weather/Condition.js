import React, { useEffect } from 'react'
import { useGlobalStore } from '../Store'

export default function Condition() {
	const { globalStore } = useGlobalStore()

	return (
		<>
			<img
				src={`http://openweathermap.org/img/wn/${globalStore.openWeatherJSON.current?.weather[0].icon}@2x.png`}
				alt={globalStore.openWeatherJSON.current?.weather[0].description}
			/>
		</>
	)
}
