import React from 'react';
import { Route, Switch } from 'react-router-dom';


import Layout from '../hoc/Layout';
import Home from './Views/Home';
import About from './Views/About';
import Profile from './Views/Profile';
import ArtistDetails from '../components/About/ArtistDetails';

const Routes = () => {
  ///so routes is the one which has recieved our template but then we pass it to app.js
    //create your routes here // meaning components to navigate too

    //our templating structure where only children returned will change
    return (
        
            <Layout>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" exact component={About} />
                <Route path="/profile" exact component={Profile} />
                <Route path="/detailspage/:id"  component={ArtistDetails} />
            </Switch>
        </Layout>
    )
};

export default Routes;