import React, { useState } from 'react'
import moment from 'moment'

export default function Time() {
	const [seconds, setSeconds] = useState(moment().format('ss'))
	const [minutes, setMinutes] = useState(moment().format('mm'))
	const [hours, setHours] = useState(moment().format('hh'))
	const [amPm, setAmPm] = useState(moment().format('A'))
	const [date, setDate] = useState(moment().format('dddd, MMMM DD, YYYY'))

	setInterval(() => {
		setSeconds(moment().format('ss'))
		setMinutes(moment().format('mm'))
		setHours(moment().format('hh'))
		setAmPm(moment().format('A'))
		setDate(moment().format('dddd, MMMM DD, YYYY'))
	}, 1000)

	return (
		<time className='dateTime' dateTime={moment().format()}>
			<span className='date'>{date}</span>
			<span className='hours'>{hours}</span>:
			<span className='minutes'>{minutes}</span>:
			<span className='seconds'>{seconds}</span>{' '}
			<span className='amPm'>{amPm}</span>
		</time>
	)
}
