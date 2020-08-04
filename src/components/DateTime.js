import React, { useState } from 'react'
import moment from 'moment'
import Date from './Date'
import Time from './Time'

export default function DateTime() {
	const [dateTime, setDateTime] = useState(null)

	setInterval(() => {
		setDateTime(moment().format())
	}, 1000)

	return (
		<time className='dateTime' dateTime={dateTime}>
			<span className='date'>
				<Date dateTime={dateTime} />
			</span>
			<span className='time'>
				<Time dateTime={dateTime} />
			</span>
		</time>
	)
}
