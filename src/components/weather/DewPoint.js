import React, { useState, useEffect } from 'react'
import { useGlobalStore } from '../Store'

export default function DewPoint() {
	const { globalStore } = useGlobalStore()
	const [dewPoint, setDewPoint] = useState()

	useEffect(() => {
		setDewPoint(globalStore.openWeatherJSON.current?.dew_point)
	}, [globalStore.openWeatherJSON])

	return <>{dewPoint && <>Dew-point: {dewPoint}</>}</>
}
