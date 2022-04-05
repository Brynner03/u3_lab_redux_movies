import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { connect } from 'react-redux'
import { LoadMovieDetails } from "../store/actions/MovieActions"



const mapStateToProps = ({ movieDetailsState }) => {
    return { movieDetailsState }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      fetchMoviesDetails: (id) => dispatch(LoadMovieDetails(id))
    }
  }


const MovieDetails = (props) => {
    const {id} = useParams()

    useEffect(() => {
        props.fetchMoviesDetails(id)
    }, [id])

    return 
    <div>
        {props.movieDetailsState.MovieDetails.overview}
    </div>
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails)