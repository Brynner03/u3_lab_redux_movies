const { GET_MOVIE_DETAILS } = require('../types')

const iState = {
  movieDetails: []
}

const MovieDetailReducer = (state = iState, action) => {
  switch (action.type) {
    case GET_MOVIE_DETAILS:
      return { ...state, movieDetails: action.payload }
    default:
      return { ...state }
  }
}

export default MovieDetailReducer