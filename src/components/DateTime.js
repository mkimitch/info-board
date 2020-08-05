import React, { useState } from 'react'
import moment from 'moment'
import Date from './Date'
import Time from './Time'

export default function DateTime() {
	const [dateTime, setDateTime] = useState(moment().format())

	setInterval(() => {
		setDateTime(moment().format())
	}, 1000)

	return (
		<time className='dateTime' dateTime={dateTime}>
			<Time dateTime={dateTime} />
			<Date dateTime={dateTime} />
		</time>
	)
}
