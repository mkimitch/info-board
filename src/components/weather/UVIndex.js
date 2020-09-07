import React, { useState, useEffect } from 'react'
import { useGlobalStore } from '../Store'

export default function UVIndex() {
	const { globalStore } = useGlobalStore()
	const [uvi, setUvi] = useState()

	useEffect(() => {
		setUvi(globalStore.openWeatherJSON.current?.uvi)
	}, [globalStore.openWeatherJSON])

	return (
		<>
			{uvi && (
				<>
					<i className='wi wi-uvi' aria-label='uvi'></i>
					<span>UV Index: {uvi}%</span>
				</>
			)}
		</>
	)
}
