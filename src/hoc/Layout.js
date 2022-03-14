import React, { Component } from 'react';
import Header from '../components/Header/Header';
import  './Layout.css';
import Footer from '../components/Footer/Footer';

class Layout extends Component {

    state = {
        
    }

    render(){
        return(
            <div className="template-background">
            <Header />

                {/*whatever jsx returned from other components*/this.props.children}


                <Footer />
            </div>
        )
    }
}

export default Layout;