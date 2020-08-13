import React, { createContext, useContext, useState } from 'react'

export const GlobalStoreContext = createContext({
	isAppLoaded: false,
	latitude: 0,
	longitude: 0,
	openWeatherJSON: {}
})

export const useGlobalStore = () => useContext(GlobalStoreContext)

export function GlobalStoreProvider({ children }) {
	const [globalStore, setGlobalStore] = useState({
		isAppLoaded: false,
		latitude: 0,
		longitude: 0,
		openWeatherJSON: {}
	})

	return (
		<GlobalStoreContext.Provider value={{ globalStore, setGlobalStore }}>
			{children}
		</GlobalStoreContext.Provider>
	)
}
