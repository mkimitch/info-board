import React, { useState, useEffect } from 'react'

export default function DewPoint(props) {
	const [dewPoint, setDewPoint] = useState()

	useEffect(() => {
		setDewPoint(props.data)
	}, [props])

	return <>{dewPoint && <>Dew-point: {dewPoint}</>}</>
}
