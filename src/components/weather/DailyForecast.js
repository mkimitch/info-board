import React, { useState, useEffect } from 'react'
import { useGlobalStore } from '../Store'
import Condition from './Condition'
import Temperature from './Temperature'
import SunriseSunset from './SunriseSunset'
import moment from 'moment'

export default function DailyForecast() {
	const { globalStore } = useGlobalStore()
	const [dailyForecast, setDailyForecast] = useState()

	useEffect(() => {
		const forecast = data => {
			return data?.map(day => {
				const dayName = moment.unix(day.dt).format('ddd D')
				return (
					<div className='day' key={day.dt}>
						<h3>{dayName}</h3>
						<div className='condition'>
							<Condition data={day.weather[0]} />
						</div>
						<div className='hiLow'>
							Min: <Temperature data={day.temp.min} /> Max:{' '}
							<Temperature data={day.temp.max} />
						</div>
						<div>
							<SunriseSunset sunrise={day.sunrise} sunset={day.sunset} />
						</div>
					</div>
				)
			})
		}
		setDailyForecast(forecast(globalStore.openWeatherJSON.daily))
	}, [globalStore.openWeatherJSON.daily])

	return (
		<>
			{dailyForecast && (
				<section className='dailyForecast'>
					<h2>7-day Outlook</h2>
					<div className='wrapper'>{dailyForecast}</div>
				</section>
			)}
		</>
	)
}
