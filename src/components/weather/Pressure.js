import React, { useState, useEffect } from 'react'
import { useGlobalStore } from '../Store'

export default function Pressure() {
	const { globalStore } = useGlobalStore()
	const [pressure, setPressure] = useState()

	useEffect(() => {
		setPressure(globalStore.openWeatherJSON.current?.pressure)
	}, [globalStore.openWeatherJSON])

	return (
		<>
			{pressure && (
				<>
					<i className='wi wi-pressure' aria-label='pressure'></i>
					<span>
						{pressure}{' '}
						<abbr title='Atmospheric pressure on the sea level'>hPa</abbr>
					</span>
				</>
			)}
		</>
	)
}
