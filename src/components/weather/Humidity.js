import React, { useState, useEffect } from 'react'

export default function Humidity(props) {
	const [humidity, setHumidity] = useState()

	useEffect(() => {
		setHumidity(props.data)
	}, [props])

	return (
		<>
			{humidity && (
				<>
					<i className='wi wi-humidity' aria-label='humidity' />
					<span>{humidity}%</span>
				</>
			)}
		</>
	)
}
