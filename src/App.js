import './styles/App.css'
import { Route, Routes } from 'react-router-dom'
import ListMovies from './components/ListMovies'
import MovieDetails from './components/MovieDetails'

const App = () => {
  
  return (
    <div className="App">
      <h3>Movies</h3>
      <Routes>
      <Route path ="/" element={<ListMovies />} />
      <Route path = "/:id" element={<MovieDetails />} />
      </Routes>
    </div>
  )
}

export default App
