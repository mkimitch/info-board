import React, { useState, useEffect } from 'react'

export default function UVIndex(props) {
	const [uvi, setUvi] = useState()

	useEffect(() => {
		setUvi(props.data)
	}, [props])

	return (
		<>
			{uvi && (
				<>
					<i className='wi wi-uvi' aria-label='uvi'></i>
					<span>UV Index: {uvi}%</span>
				</>
			)}
		</>
	)
}
