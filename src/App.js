import React from 'react'
import './App.css'
import DateTime from './components/DateTime'
import Weather from './components/weather/Weather'
import { GlobalStoreProvider } from './components/Store'

function App() {
	return (
		<div className='App'>
			<DateTime />
			<GlobalStoreProvider>
				<Weather data={{ lat: 44.977753, lon: -93.26501 }} />
			</GlobalStoreProvider>
		</div>
	)
}

export default App
