import React, { useState, useEffect } from 'react'
import moment from 'moment'
import { useGlobalStore } from '../Store'

export default function SunriseSunset() {
	const { globalStore } = useGlobalStore()
	const [sunrise, setSunrise] = useState()
	const [sunset, setSunset] = useState()

	useEffect(() => {
		setSunrise(
			moment.unix(globalStore.openWeatherJSON.current?.sunrise).format('LT')
		)
		setSunset(
			moment.unix(globalStore.openWeatherJSON.current?.sunset).format('LT')
		)
	}, [globalStore.openWeatherJSON])

	return (
		<>
			Sunrise: {sunrise} Sunset: {sunset}
		</>
	)
}
