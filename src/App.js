import React from 'react'
import './App.css'
import DateTime from './components/DateTime'
import Weather from './components/Weather'

function App() {
	return (
		<div className='App'>
			<DateTime />
			<Weather zip='55044' />
		</div>
	)
}

export default App
