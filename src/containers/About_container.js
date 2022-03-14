import React, { Component } from 'react';

import { connect } from 'react-redux';
import { getArtistListAll,getSearchedArtistList } from '../actions/about_data_actions';
import { bindActionCreators } from 'redux';

import Search from '../components/About/Search';
import Artistlist from '../components/About/Artistlist';

//this container  holds our data from actions

class About_container extends Component { 

    componentWillMount() {
    //whenever this component is about to be added, we perform the following actions under the action folder
        //this means getting a list of artists
        this.props.getArtistListAll();  //action for getting alist of artist
    }

      //search functionalty by keyword
    getKeywords = (event) => {
        let key = event.target.value;
        this.props.getSearchedArtistList(key); //action for getting alist of searched artist
    }

    render(){
        //let's render our artists list and and a search components
      //  console.log(this.props)      
        return (
            <div>
                <Search keywords={this.getKeywords}/>
                <Artistlist myartists={this.props.data.SearchedArtistList}/>
            </div>
        )
    }
    
}

//this function listens for actions and when action happens,then we will have  a new state
//and then inject the new state inside this component
//so this object gets data from bindActionCreators and then we pass this object to Artistlist via myartists
//as new object
function mapStateToProps(state){
    return {
        data: state.SearchedArtistList //this is from About_Reducer
    }
}



/*
This function recieves dispatch so it returns actions we want to use
bindActionCreators helps us import all the actions
*/
function mapDispatchToProps(dispatch){
    return bindActionCreators({
        //lets pass our actions
        getSearchedArtistList,
        getArtistListAll
    },dispatch)
}

//and here we connect our container or this component  to our actions
export default connect(mapStateToProps,mapDispatchToProps)(About_container)