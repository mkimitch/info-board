import React, { useEffect } from 'react'
import DailyForecast from './DailyForecast'
import CurrentWeather from './CurrentWeather'
import { useGlobalStore } from '../Store'

const weatherApiString = function () {
	return `https://api.openweathermap.org/data/2.5/onecall?lat=44.977753&lon=-93.265015&units=imperial&appid=${process.env.REACT_APP_WEATHER_DEFAULT_API_KEY}`
}

// const _iterator = 5 * 60 * 1000
const _iterator = 30 * 1000

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
			{globalStore.openWeatherJSON.current && (
				<div className='current'>
					<CurrentWeather />
				</div>
			)}
			<div>
				<DailyForecast />
			</div>
		</>
	)
}
