import React, { useEffect } from 'react'
import { LoadMovies } from '../store/actions/MovieActions'
import { connect } from 'react-redux'
import { POSTER_PATH } from '../globals'
import { Link } from 'react-router-dom'


const mapStateToProps = ({ movieState }) => {
  return { movieState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovies: () => dispatch(LoadMovies())
  }
}


const ListMovies = (props) => {
  useEffect(() => {
    props.fetchMovies()

  }, [])
  return (
      <div>

      <h1>ListMovies</h1>
      <div className="movies">

      {props.movieState.movies.map((movie) => (
        <div key={movie.id}>
          <Link to={`/${movie.id}`}>
          <h3>{movie.original_title}</h3>
          <img src={`${POSTER_PATH}${movie.backdrop_path}`} alt="poster" />
          </Link>
        </div>
      ))}
      </div>
      </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ListMovies)