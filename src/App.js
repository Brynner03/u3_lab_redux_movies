import './styles/App.css'
import { Routes, Route } from 'react-router-dom'
import Movies from './components/Movies'
import MovieDetails from './components/MovieDetails'


const App = () => {
  
  return (
    <div className="App">
      <h3>TheMovieDB Brynner</h3>
      <Routes>
        <Route path="/" element={<Movies />} />
          <Route path="/:id" element={<MovieDetails />} />
      </Routes>
     
    </div>
  )
}

export default App
