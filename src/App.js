import React from 'react'
import './App.css'
import DateTime from './components/DateTime'

function App() {
	return (
		<div className='App'>
			<code>DateTime</code>: <DateTime />
			{/* {process.env.NODE_ENV} */}
			{/* {process.env.REACT_APP_WEATHER_DEFAULT_API_KEY || `Environment variable not available`} */}
		</div>
	)
}

export default App
