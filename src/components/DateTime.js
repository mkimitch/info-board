import React, { useState, useEffect } from 'react'
import moment from 'moment'
import Date from './Date'
import Time from './Time'

export default function DateTime() {
	const [dateTime, setDateTime] = useState(moment().format())

	useEffect(() => {
		const getDateTime = setInterval(() => {
			setDateTime(moment().format())
		}, 1000)
		return () => clearInterval(getDateTime)
	}, [])

	return (
		<time className='dateTime' dateTime={dateTime}>
			<Time dateTime={dateTime} />
			<Date dateTime={dateTime} />
		</time>
	)
}
