import React, { useState, useEffect } from 'react'
import { useGlobalStore } from '../Store'

export default function Temperature(props) {
	const [tempType, setTempType] = useState(props.data)
	const { globalStore } = useGlobalStore()

	useEffect(() => {
		setTempType(props.data)
	}, [props.data])

	return (
		<>
			{tempType === 'current' &&
				Math.round(globalStore.openWeatherJSON.current?.temp)}
			{tempType === 'feelsLike' &&
				Math.round(globalStore.openWeatherJSON.current?.feels_like)}
			℉
		</>
	)
}
