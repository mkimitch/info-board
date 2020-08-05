import React, { useState, useEffect } from 'react'
import moment from 'moment'

export default function Date({ dateTime }) {
	const [dayOfWeek, setDayOfWeek] = useState(null)
	const [month, setMonth] = useState(null)
	const [day, setDay] = useState(null)
	const [year, setYear] = useState(null)

	useEffect(() => {
		setDayOfWeek(moment(dateTime).format('dddd'))
		setMonth(moment(dateTime).format('MMMM'))
		setDay(moment(dateTime).format('D'))
		setYear(moment(dateTime).format('YYYY'))
	})
	return (
		<span className='date'>
			<span className='dayOfWeek'>{dayOfWeek}, </span>
			<span className='month'>{month} </span>
			<span className='day'>{day}, </span>
			<span className='year'>{year}</span>
		</span>
	)
}
