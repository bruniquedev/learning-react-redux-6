//this is our about reducer which will return an object of data from the action specified in home container
//this function wil return certain data basing on action type requested here by the container 
//let's say about container
//but we don't reach this reducer directly but through the combined reducer
//thats why we have to import it to the CombinedAboutReducer
export default function(state={},action){

    switch(action.type){
        case 'GET_ARTISTS':
            return {...state,SearchedArtistList:action.payload}
        case 'GET_ARTISTS_ALL':
            return {...state,SearchedArtistList:action.payload}
        case 'GET_ARTISTS_DETAIL':
            return {...state,artistData:action.payload}
        case 'CLEAR_ARTIST_DETAIL':
            return {...state,artistData:action.payload}   
        default:
            return state;
    }

}