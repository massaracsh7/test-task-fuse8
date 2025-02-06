import { useState, useEffect, useCallback } from 'react'
import { searchCharacters } from '../utils/api'
import { CharacterArray } from '../types/types'

const useCharacterSearch = (query: string) => {
  const [loading, setLoading] = useState(false)
  const [characters, setCharacters] = useState<CharacterArray>([])
  const [counts, setCounts] = useState<number>(0)
  const [error, setError] = useState<string>('')

  const getData = useCallback(async () => {
    if (query.length < 3) {
      setCharacters([])
      setCounts(0)
      return
    }

    setLoading(true)
    setError('')
    try {
      const data = await searchCharacters(query)
      if (data?.results && data.results.length > 0) {
        setCharacters(data.results)
        setCounts(data.info.count)
      } else {
        setError('Sorry, your character is not found. Please, try again.')
        setCharacters([])
        setCounts(0)
      }
    } catch (error) {
      setError('Failed to load data. Please try again.')
      setCharacters([])
      setCounts(0)
      console.error('Failed to load data', error)
    } finally {
      setLoading(false)
    }
  }, [query])

  useEffect(() => {
    if (query) {
      getData()
    } else {
      setCharacters([])
      setCounts(0)
    }
  }, [query, getData])

  return { loading, characters, counts, error }
}

export default useCharacterSearch
