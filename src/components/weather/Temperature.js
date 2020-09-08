import React, { useState, useEffect } from 'react'

export default function Temperature(props) {
	const [temp, setTemp] = useState()

	useEffect(() => {
		setTemp(props.data)
	}, [props])

	return <>{temp && Math.round(temp)}°</>
}
