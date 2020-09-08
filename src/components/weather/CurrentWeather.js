import React, { useState, useEffect } from 'react'
import { useGlobalStore } from '../Store'
import Condition from './Condition'
import Temperature from './Temperature'
import SunriseSunset from './SunriseSunset'
import Humidity from './Humidity'
import Pressure from './Pressure'
import DewPoint from './DewPoint'
import UVIndex from './UVIndex'
import Wind from './Wind'

export default function CurrentWeather() {
	const { globalStore } = useGlobalStore()
	const [currentConditions, setCurrentConditions] = useState()

	useEffect(() => {
		setCurrentConditions(globalStore.openWeatherJSON.current)
	}, [globalStore.openWeatherJSON.current])

	return (
		<>
			{currentConditions && (
				<section className='currentWeather'>
					<div className='current'>
						<Temperature data={currentConditions.temp} />
					</div>
					<div className='condition'>
						<Condition data={currentConditions.weather[0]} />
					</div>
					<div className='feelsLike'>
						Feels like <Temperature data={currentConditions.feels_like} />
					</div>
					<div>
						<SunriseSunset
							sunrise={currentConditions.sunrise}
							sunset={currentConditions.sunset}
						/>
					</div>
					<div>
						<Humidity data={currentConditions.humidity} />
					</div>
					<div>
						<Pressure data={currentConditions.pressure} />
					</div>
					<div>
						<DewPoint data={currentConditions.dew_point} />
					</div>
					<div>
						<UVIndex data={currentConditions.uvi} />
					</div>
					<div>
						<Wind
							speed={currentConditions.wind_speed}
							degree={currentConditions.wind_deg}
						/>
					</div>
				</section>
			)}
		</>
	)
}
