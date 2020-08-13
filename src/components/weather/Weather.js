import React, { useEffect } from 'react'
import Condition from './Condition'
import Temperature from './Temperature'
import SunriseSunset from './SunriseSunset'
import { useGlobalStore } from '../Store'

const weatherApiString = function () {
	return `https://api.openweathermap.org/data/2.5/onecall?lat=44.977753&lon=-93.265015&units=imperial&appid=${process.env.REACT_APP_WEATHER_DEFAULT_API_KEY}`
}

const _iterator = 5 * 60 * 1000

export default function Weather({ zip }) {
	const { globalStore, setGlobalStore } = useGlobalStore()

	useEffect(() => {
		getWeatherData()

		async function getWeatherData() {
			const results = await fetch(weatherApiString())
			const data = await results.json()
			console.log(data)
			setGlobalStore({ ...globalStore, openWeatherJSON: data })
		}

		const interval = setInterval(() => {
			getWeatherData()
		}, _iterator)

		return () => clearInterval(interval)
	}, [])

	return (
		<>
			<div className='current'>
				<Condition />
			</div>
			<div className='current'>
				<Temperature data='current' />
			</div>
			<div className='feelsLike'>
				Feels like <Temperature data='feelsLike' />
			</div>
			<div>
				<SunriseSunset />
			</div>
		</>
	)
}
