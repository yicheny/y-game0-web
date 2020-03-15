import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Home from "./Home";
import Story from "./Story";
import ActivityRoom from "./ActivityRoom";
import './Main.scss';

function Main(props) {
    return <div className="gameBox flex center">
        <Switch>
            <Route path='/story' component={Story}/>
            <Route path='/activity' component={ActivityRoom}/>
            <Route component={Home}/>
        </Switch>
    </div>
}

export default Main;