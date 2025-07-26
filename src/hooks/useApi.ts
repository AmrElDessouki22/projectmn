'use client'

import { useState, useEffect } from 'react'
import { API_URL } from '@/lib/constants'

export function useApi(endpoint: string) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_URL}${endpoint}`)
        const result = await response.json()
        setData(result)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [endpoint])

  return { data, loading, error }
}