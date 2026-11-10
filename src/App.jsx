import { useEffect, useState } from 'react'
import './App.css'

const FILMS_URL = 'https://swapi.dev/api/films/'

function App() {
  const [films, setFilms] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const controller = new AbortController()
    fetch(FILMS_URL, { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error(`Request failed: ${res.status}`)
        return res.json()
      })
      .then((data) => {
        setFilms([...data.results].sort((a, b) => a.episode_id - b.episode_id))
        setLoading(false)
      })
      .catch((err) => {
        if (err.name === 'AbortError') return
        setError(err.message)
        setLoading(false)
      })
    return () => controller.abort()
  }, [])

  return (
    <main className="films">
      <h1>Star Wars Films</h1>
      {loading && <p>Loading…</p>}
      {error && <p role="alert">Error: {error}</p>}
      <ul>
        {films.map((film) => (
          <li key={film.url}>
            <h2>
              Episode {film.episode_id}: {film.title}
            </h2>
            <p>
              <strong>Director:</strong> {film.director} ·{' '}
              <strong>Released:</strong> {film.release_date}
            </p>
            <p>{film.opening_crawl}</p>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default App
