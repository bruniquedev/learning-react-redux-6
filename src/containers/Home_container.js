import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getmovieslistAction,getdirectorslistAction } from '../actions/home_data_actions';
import { bindActionCreators } from 'redux';
import MoviesList from '../components/Home/MoviesList';
import DirectorsList from '../components/Home/DirectorsList';
//this container  holds our data from actions



class Home_container extends Component {

    componentWillMount(){
        //whenever this component is about to be added, we perform the following actions under the action folder
        //this means getting a llist of movies and directors
        this.props.getmovieslistAction();//action for getting alist of movies
        this.props.getdirectorslistAction(); //action for getting alist of directors
    }

    render(){
        //let's render movies list and directors list 
        return(
            <div>
                <h3>List of movies</h3>
                <MoviesList {...this.props}/>
                <h3>List of directors</h3>
                <DirectorsList {...this.props}/>
                
            </div>
        )
    }
}

//this function listens for actions and when action happens,then we will have  a new state
//and then inject the new state inside this component
const mapStateToProps = (state) => {
    return {
        data: state.movies,//this is from Home_Reducer
        data: state.directors//this is from Home_Reducer
    }
}

/*
This function recieves dispatch so it returns actions we want to use
bindActionCreators helps us import all the actions
*/
const mapDispatchToProps = (dispatch) => {
    //
    return bindActionCreators({
        //lets pass our actions
        getmovieslistAction,
        getdirectorslistAction
    },dispatch)
}
//and here we connect our container or this component  to our actions
export default connect(mapStateToProps,mapDispatchToProps)(Home_container);