import React, { useState, useEffect } from 'react'
import { useGlobalStore } from '../Store'

export default function Humidity() {
	const { globalStore } = useGlobalStore()
	const [humidity, setHumidity] = useState()

	useEffect(() => {
		setHumidity(globalStore.openWeatherJSON.current?.humidity)
	}, [globalStore.openWeatherJSON])

	return (
		<>
			{humidity && (
				<>
					<i className='wi wi-humidity' aria-label='humidity'></i>
					<span>{humidity}%</span>
				</>
			)}
		</>
	)
}
