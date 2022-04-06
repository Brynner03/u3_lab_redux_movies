import { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { LoadMovies } from '../store/actions/MovieActions'
import { POSTER_PATH } from '../globals'

const mapStateToProps = ({ movieState }) => {
  return { movieState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovie: () => dispatch(LoadMovies())
  }
}

const Movies = (props) => {

  useEffect(() => {
    props.fetchMovie()
  }, [])
  
  return (
    <div>
      {props.movieState.movies.map((movie) => (
        <div className='movie-grid' key={movie.id}>
            <Link to={`/${movie.id}`}>
          
          <img className='poster'src={`${POSTER_PATH}${movie.backdrop_path}`} alt="poster"/>
          <h3>{movie.original_title}</h3>
          <h3>Vote Count: {movie.vote_count}</h3>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies)