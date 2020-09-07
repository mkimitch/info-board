import React, { useEffect } from 'react'
import Condition from './Condition'
import Temperature from './Temperature'
import SunriseSunset from './SunriseSunset'
import Humidity from './Humidity'
import Pressure from './Pressure'
import DewPoint from './DewPoint'
import UVIndex from './UVIndex'
import Wind from './Wind'
import DailyForecast from './DailyForecast'
import { useGlobalStore } from '../Store'

const weatherApiString = function () {
	return `https://api.openweathermap.org/data/2.5/onecall?lat=44.977753&lon=-93.265015&units=imperial&appid=${process.env.REACT_APP_WEATHER_DEFAULT_API_KEY}`
}

const _iterator = 5 * 60 * 1000
// const _iterator = 30 * 1000

export default function Weather({ zip }) {
	const { globalStore, setGlobalStore } = useGlobalStore()

	useEffect(() => {
		async function getWeatherData() {
			const results = await fetch(weatherApiString())
			const data = await results.json()
			console.log(data)
			setGlobalStore({ ...globalStore, openWeatherJSON: data })
		}

		getWeatherData()

		const interval = setInterval(() => {
			getWeatherData()
		}, _iterator)

		return () => clearInterval(interval)
	}, [])

	return (
		<>
			<div className='current'>
				<Condition data={globalStore.openWeatherJSON.current} />
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
			<div>
				<Humidity />
			</div>
			<div>
				<Pressure />
			</div>
			<div>
				<DewPoint />
			</div>
			<div>
				<UVIndex />
			</div>
			<div>
				<Wind />
			</div>
			<div>
				<DailyForecast />
			</div>
		</>
	)
}
