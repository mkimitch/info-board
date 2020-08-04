import React, { useState } from 'react'
import moment from 'moment'

export default function Date() {
	const [date, setDate] = useState(moment().format('dddd, MMMM DD, YYYY'))
	const [dateISO, setDateISO] = useState(moment().format())

	setInterval(() => {
		setDate(() => moment().format('dddd, MMMM DD, YYYY'))
		setDateISO(() => moment().format())
	}, 1000)

	return (
		<time className='currentTime' dateTime={date}>
			{date}
		</time>
	)
}
