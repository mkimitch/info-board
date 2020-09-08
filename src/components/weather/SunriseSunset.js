import React, { useState, useEffect } from 'react'
import moment from 'moment'

export default function SunriseSunset(props) {
	const [sunrise, setSunrise] = useState()
	const [sunset, setSunset] = useState()

	useEffect(() => {
		setSunrise(moment.unix(props.sunrise).format('LT'))
		setSunset(moment.unix(props.sunset).format('LT'))
	}, [props])

	return (
		<>
			{sunrise && (
				<>
					<i className='wi wi-sunrise' aria-label='sunrise'></i> {sunrise}{' '}
				</>
			)}
			{sunset && (
				<>
					<i className='wi wi-sunset' aria-label='sunset'></i> {sunset}
				</>
			)}
		</>
	)
}
