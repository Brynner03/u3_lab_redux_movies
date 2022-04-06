import {
   GetMovies,
   GetMovieDetails
    } from '../../services/MovieService'
  import { GET_MOVIES, GET_MOVIE_DETAILS } from '../types'
  
  
  
  export const LoadMovies = () => {
    return async (dispatch) => {
      try {
        const movies = await GetMovies()
        dispatch({
          type: GET_MOVIES,
          payload: movies
        })
        console.log(movies)
      } catch (error){
        throw error
      }
    }
  }

  export const LoadMovieDetails = (id) => {

    return async (dispatch) => {
      try {
        const MovieDetails = await GetMovieDetails(id)
  
        dispatch({
          type: GET_MOVIE_DETAILS,
          payload: MovieDetails
        })
      } catch (error) {
        throw error
      }
    }
  }