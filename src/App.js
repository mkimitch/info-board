import React from 'react'
import './App.css'
import Time from './components/Time'
import Date from './components/Date'
import DateTime from './components/DateTime'

function App() {
	return (
		<div className='App'>
			<div>
				<code>Date Time</code>
				: <Date /> <Time />
			</div>
			<div>
				<code>DateTime</code>: <DateTime />
			</div>
			{/* {process.env.NODE_ENV} */}
			{/* {process.env.REACT_APP_WEATHER_DEFAULT_API_KEY || `Environment variable not available`} */}
		</div>
	)
}

export default App
