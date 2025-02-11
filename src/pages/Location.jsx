import { useParams } from 'react-router-dom'
import { useLocationById } from '../hooks/useLocation'

export const Location = () => {
	const searchParams = new URLSearchParams(window.location.search)
	const query = searchParams.get('query')

	const { locationId } = useParams()
	const {data: location, isFetched} = useLocationById(locationId)

	return (
		<>
			{isFetched && <h1 style={{color: '#fff'}}>
				{location?.name}
				{query}
			</h1>}
		</>
	)
}
