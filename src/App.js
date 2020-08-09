import React from 'react'
import './App.css'
import DateTime from './components/DateTime'
import Weather from './components/weather/Weather'
import { WeatherContextProvider } from './components/weather/WeatherContext'

function App() {
	return (
		<div className='App'>
			<DateTime />
			<WeatherContextProvider>
				<Weather data={{ lat: 44.977753, lon: -93.26501 }} />
			</WeatherContextProvider>
		</div>
	)
}

export default App
