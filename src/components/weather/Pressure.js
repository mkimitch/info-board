import React, { useState, useEffect } from 'react'

export default function Pressure(props) {
	const [pressure, setPressure] = useState()

	useEffect(() => {
		setPressure(props.data)
	}, [props])

	return (
		<>
			{pressure && (
				<>
					<i className='wi wi-pressure' aria-label='pressure'></i>
					{pressure}{' '}
					<abbr title='Atmospheric pressure on the sea level'>hPa</abbr>
				</>
			)}
		</>
	)
}
