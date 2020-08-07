import React, { useState, useEffect } from 'react'

export default function Time({ data }) {
	const [temp, setTemp] = useState(data.temp)

	useEffect(() => {
		setTemp(data.temp)
	}, [data])
	return <span className='temperature current'>{temp}℉</span>
}
