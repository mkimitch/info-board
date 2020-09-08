import React, { useState, useEffect } from 'react'

export default function Condition(props) {
	const [conditionData, setConditionData] = useState()

	useEffect(() => {
		setConditionData(props.data)
	}, [props])

	return (
		<>
			{conditionData && (
				<i
					className={`wi wi-owm-${conditionData.id} weather-icon`}
					aria-label={conditionData.description}
				/>
			)}
		</>
	)
}
