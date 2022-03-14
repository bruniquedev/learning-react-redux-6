import React,{ Component } from 'react';


import { connect } from 'react-redux';
import { artistDetail,clearArtistDetail } from '../actions/about_data_actions';
import { bindActionCreators } from 'redux';

import { Link } from 'react-router-dom';

class About_details_container extends Component {

    componentWillMount() {
        this.props.artistDetail(this.props.match.params.id)//get artist details
    }

    componentWillUnmount(){
        this.props.clearArtistDetail(); //on moving away from the component, clear the data
    }


    artistTemplate = (data) => (
        data.artistData ? 
            <div className="artist_view">
                <div className="artist_background" style={{
                    background: `url(${data.artistData[0].cover})`
                }}>
                    <Link to="/about">
                        Back home
                    </Link>
                    <div className="name">{data.artistData[0].name}</div>
                </div>
                <div className="artist_description">
                    <p>{data.artistData[0].bio}</p>
                    <div className="tags">
                        <div>
                            <strong>Style:</strong> {data.artistData[0].style}
                        </div>
                    </div>
                </div>
                <div className="artist_album_list">
                    {data.artistData[0].albums ?
                        data.artistData[0].albums.map(item => (
                            <div key={item.cover} className="albums">
                                <div className="cover" style={{
                                    background: `url(/images/albums/${item.cover})`
                                }}>
                                </div>

                            </div>
                        ))
                        : null
                    }
                </div>
            </div>
        :null

    )
    
    render(){
        //render the details
        return (
            <div>
                {this.artistTemplate(this.props.artists)}
            </div>
        );
    }
};

//this function listens for actions and when action happens,then we will have  a new state
//and then inject the new state inside this component
function mapStateToProps(state){
    return {
            //lets pass our actions
            data:state.artists
    }
}


/*
This function recieves dispatch so it returns actions we want to use
bindActionCreators helps us import all the actions
*/

function mapDispatchToProps(dispatch){
    return bindActionCreators({artistDetail,clearArtistDetail},dispatch)
}
//and here we connect our container or this component  to our actions
export default connect(mapStateToProps,mapDispatchToProps)(About_details_container)