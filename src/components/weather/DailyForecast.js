import React, { useState, useEffect } from 'react'
import { useGlobalStore } from '../Store'
import moment from 'moment'

export default function DailyForecast() {
	const { globalStore } = useGlobalStore()
	const [dailyForecast, setDailyForecast] = useState(
		globalStore.openWeatherJSON.daily
	)

	// const renderedItems = ({ dailyForecast }) => {
	// 	return <div key={day.dt}>{moment.unix(day.dt).format('ddd D')} </div>
	// }

	useEffect(() => {
		const forecast = data => {
			return data?.map(day => {
				const foo = moment.unix(day.dt).format('ddd D')
				return (
					<span key={day.dt}>
						<h3>{foo}</h3>
						<div>
							<i
								className={`wi wi-owm-${day.weather[0].id}`}
								aria-label={day.weather[0].description}
							></i>
						</div>
						<div>
							{day.temp.min} {day.temp.max}
						</div>
						<div>Rain: {day.rain}</div>
						<div>UVI: {day.uvi}</div>
						<div>
							<i className='wi wi-sunrise' aria-label='sunrise'></i>{' '}
							{moment.unix(day.sunrise).format('LT')}{' '}
							<i className='wi wi-sunset' aria-label='sunset'></i>{' '}
							{moment.unix(day.sunset).format('LT')}
						</div>
					</span>
				)
			})
		}
		setDailyForecast(forecast(globalStore.openWeatherJSON.daily))
	}, [globalStore.openWeatherJSON.daily])

	return (
		<>
			{dailyForecast && (
				<>
					7-day Outlook
					<div>{dailyForecast}</div>
				</>
			)}
		</>
	)
}
