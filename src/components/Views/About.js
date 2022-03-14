import React,{Component} from 'react';//in order for us to create a component, first we import react
//we are extending this class to another class called action which will perform all operations

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
import promiseMiddleware from 'redux-promise';

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

import About_container from '../../containers/About_container';
import reducers from '../../reducers/CombinedAboutReducers';

/*
promiseMiddleware
The middleware returns a promise to the caller so that it can 
wait for the operation to finish before continuing
*/
const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore)


class About extends Component{


    render(){

      
        
return(

  //we need to pass reducers to provider
  <Provider store={createStoreWithMiddleware(reducers)}>
  <div className="heading1">
    <h3 className="text-center">About content - -Advanced Redux example two</h3>
    <About_container />
    </div>
    </Provider>

)
}

}


export default About;