import { useState, useEffect } from 'react'
import moment from 'moment'

export default function Time({ dateTime }) {
	const [time, setTime] = useState(null)

	useEffect(() => {
		setTime(moment(dateTime).format('hh:mm:ss A'))
	})
	return time
}
