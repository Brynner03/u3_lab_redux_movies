import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import MovieDetailsReducer from './reducers/MovieDetailsReducer'
import MovieReducers from './reducers/MovieReducers'

const store = createStore(
    combineReducers({
        movieState: MovieReducers,
        movieDetailsState: MovieDetailsReducer
    }), 
    composeWithDevTools(applyMiddleware(thunk)))

export default store