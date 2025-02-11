import { useQuery } from "@tanstack/react-query"
import { characters } from "../api/api"

export const useLocationById = (id) => {
	return useQuery({
		queryFn: () => characters.getLocationById(id),
		queryKey: ['location', id],
		enabled: !!id,
		select: data => data.data
	})
}