import React, { useState } from 'react'
import moment from 'moment'

export default function Time(params) {
	const [time, setTime] = useState(moment().format('LTS'))

	setInterval(() => {
		setTime(() => moment().format('LTS'))
	}, 1000)

	return (
		<time className='currentTime' dateTime={time}>
			{time}
		</time>
	)
}
