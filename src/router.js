import React from 'react';
import {Switch, Route} from 'react-router-dom';
import formDate from './components/formDate';
import ListCards from './components/ListCards';
import Home from './components/Home';
import Cardpage from './components/Cardpage';


const Router = () =>{
    return(
        <Switch>
            <Route path='/form' component={formDate} />
            <Route path='/list' component={ListCards} />
            <Route path='/Cardpage' component={Cardpage}/>
            <Route path='/' component={Home} />
           
        </Switch>
    )
}

export default Router;