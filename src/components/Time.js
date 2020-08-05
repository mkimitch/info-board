import React, { useState, useEffect } from 'react'
import moment from 'moment'

export default function Time({ dateTime }) {
	const [hours, setHours] = useState(null)
	const [minutes, setMinutes] = useState(null)
	const [seconds, setSeconds] = useState(null)
	const [amPm, setAmPm] = useState(null)

	useEffect(() => {
		setHours(moment(dateTime).format('hh'))
		setMinutes(moment(dateTime).format('mm'))
		setSeconds(moment(dateTime).format('ss'))
		setAmPm(moment(dateTime).format('A'))
	})
	return (
		<span className='time'>
			<span className='hours'>{hours}:</span>
			<span className='minutes'>{minutes}</span>
			<span className='seconds'>{seconds}</span>
			<span className='amPm'>{amPm}</span>
		</span>
	)
}
