import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { LoadMovieDetails} from '../store/actions/MovieActions'
import {POSTER_PATH} from '../globals'

const mapStateToProps = ({ movieDetailState }) => {
  return { movieDetailState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovieDetails: (id) => dispatch(LoadMovieDetails(id))
  }
}

const MovieDetails = (props) => {
  let { id } = useParams()

  useEffect(() => {
    props.fetchMovieDetails(id)
  },[id])

  return (
    
    <div>
      <div>
      <img className='poster'src={`${POSTER_PATH}${props.movieDetailState.movieDetails.backdrop_path}`} alt="poster"/>
      <h2>
        {props.movieDetailState.movieDetails.title}
        </h2>
      <h3>
      {props.movieDetailState.movieDetails.overview}
      </h3>
      <h3>
       Vote Average: {props.movieDetailState.movieDetails.vote_average}/10
      </h3>
      <h3>
        RunTime: {props.movieDetailState.movieDetails.runtime} minutes
      </h3>
      </div>
    </div>
    
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails)
