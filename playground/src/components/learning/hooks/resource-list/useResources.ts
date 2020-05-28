import { useState, useEffect } from 'react'
import genericResourceService from 'services/placeholder/generic-resource-service'
import { ResourceId, Post, Todo, User } from 'services/placeholder/models'

type ResourceType = Todo | Post | User

export default function useResources<T = ResourceType>(
  resource?: ResourceId
): T[] {
  const [resources, setResources] = useState<T[]>([])

  useEffect(() => {
    const fetchData = async () => {
      let values: T[] = []
      if (resource) {
        const response = await genericResourceService.list<T>(resource)
        values = response.data
      }
      setResources(values)
    }
    fetchData()
  }, [resource])

  return resources
}
