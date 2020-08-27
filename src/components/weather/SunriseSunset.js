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
			{sunrise && sunset && (
				<div>
					<i className='wi wi-sunrise' aria-label='sunrise'></i> {sunrise}{' '}
					<i className='wi wi-sunset' aria-label='sunset'></i> {sunset}
				</div>
			)}
		</>
	)
}
