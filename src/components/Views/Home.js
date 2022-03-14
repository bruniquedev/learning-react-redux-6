import React,{Component} from 'react';//in order for us to create a component, first we import react

/*
Redux is a state management library. It's main use is to make the use of state easier
Redux is kind of a big object where we store data inside and this data will advise react in how to behave

Redux makes the application logic simple as the same routine is performed
 for different components in your application

 how redux works
 Redux data --> React component -->Browser

 Redux performs operations on a server like fetching info and store it in some place inside redux.
*/

//to use redux, we have to import these imports
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

//applyMiddleware act as mediator between redux and the actual component
// createStore will need a list of reducers . it works with applyMiddleware and then passed to provider

/*
structure of redux

if using high order components lay out we will have the following
hoc
views
Routes
components
containers
reducers
actions


*/

import Home_container from '../../containers/Home_container';
import reducers from '../../reducers/CombinedHomeReducers'


const createStoreWithMiddleware = applyMiddleware()(createStore);

class Home extends Component{

   

render(){
return(

    //we need to pass reducers to provider
    <Provider store={createStoreWithMiddleware(reducers)}>
    <div className="container heading1">
    <h3>Home -Redux example one</h3>
<Home_container />
    </div>
    </Provider>

);
}

}


export default Home;