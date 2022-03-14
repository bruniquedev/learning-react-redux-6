//this is our home reducer which will return an object of data from the action specified in home container
//this function wil return certain data basing on action type requested here by the container 
//let's say home container
//but we don't reach this reducer directly but through the combined reducer
//thats why we have to import it to the CombinedHomeReducer
export default function(state = {},action){
    switch(action.type){
        case 'MOVIES_LIST':
            return {...state,movies:action.payload}
        case 'DIR_LIST':
            return {...state,directors:action.payload}
        default:
            return state;
    }
}
