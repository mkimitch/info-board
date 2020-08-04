import { useState, useEffect } from 'react'
import moment from 'moment'

export default function Date({ dateTime }) {
	const [date, setDate] = useState(null)

	useEffect(() => {
		setDate(moment(dateTime).format('LL'))
	})
	return date
}
