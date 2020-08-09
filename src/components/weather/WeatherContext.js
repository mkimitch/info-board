import React, { createContext, useContext, useState } from 'react'

export const WeatherContext = createContext()

export const useWeatherData = () => useContext(WeatherContext)

export function WeatherContextProvider({ children }) {
	const [weatherData, setWeatherData] = useState({})

	return (
		<WeatherContext.Provider value={{ weatherData, setWeatherData }}>
			{children}
		</WeatherContext.Provider>
	)
}
