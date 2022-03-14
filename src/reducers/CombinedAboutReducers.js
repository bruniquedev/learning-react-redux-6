import { combineReducers } from 'redux';
import SearchedArtistList from './About_reducer';
//here, we are going to set all reducers we need here by including them here after importing them like above

const rootReducer = combineReducers({
    SearchedArtistList
})

export default rootReducer;