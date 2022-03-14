import { combineReducers } from 'redux';
import movies from './Home_reducer';
import directors from './Home_reducer';
//here, we are going to set all reducers we need here by including them here after importing them like above

const rootReducer = combineReducers({
    movies,
    directors
})

export default rootReducer;