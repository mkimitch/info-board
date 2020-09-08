import React, { useState, useEffect } from 'react'

export default function Wind(props) {
	const [windSpeed, setWindSpeed] = useState()
	const [windDegree, setWindDegree] = useState()
	const [beaufortWind, setBeaufortWind] = useState()

	const beaufortWindScale = windSpeed => {
		if (windSpeed < 1) return { number: 0, description: 'Calm' }
		if (windSpeed < 4) return { number: 1, description: 'Light Air' }
		if (windSpeed < 8) return { number: 2, description: 'Light Breeze' }
		if (windSpeed < 13) return { number: 3, description: 'Gentle Breeze' }
		if (windSpeed < 19) return { number: 4, description: 'Moderate Breeze' }
		if (windSpeed < 25) return { number: 5, description: 'Fresh Breeze' }
		if (windSpeed < 32) return { number: 6, description: 'Strong Breeze' }
		if (windSpeed < 39) return { number: 7, description: 'Near Gale' }
		if (windSpeed < 47) return { number: 8, description: 'Gale' }
		if (windSpeed < 55) return { number: 9, description: 'Strong Gale' }
		if (windSpeed < 64) return { number: 10, description: 'Storm' }
		if (windSpeed < 73) return { number: 11, description: 'Violent Storm' }
		if (windSpeed >= 73) return { number: 12, description: 'Hurricane' }
	}

	useEffect(() => {
		setWindSpeed(props.speed)
		setWindDegree(props.degree)
		setBeaufortWind(beaufortWindScale(windSpeed))
	}, [props, windSpeed])

	return (
		<>
			<i
				className={`wi wi-wind-beaufort-${beaufortWind?.number}`}
				aria-label={beaufortWind?.description}
			></i>{' '}
			{windSpeed} <abbr title='Miles Per Hour'>mph</abbr>{' '}
			<i className={`wi wi-wind towards-${windDegree}-deg`}></i>
		</>
	)
}
