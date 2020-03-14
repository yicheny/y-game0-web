import React from 'react';
import './Home.scss';
import {Button} from "../component";
import homeAudio from '../web-data/audio/home.mp3';

function Home(props) {
    return <div className="gameBox flex center">
        <div className="home card flex center-m">
            <div className="home-menu flex y">
                <Button onClick={()=>console.log('开始游戏')}>开始游戏</Button>
                <Button>退出游戏</Button>
            </div>
        </div>
        <audio src={homeAudio} autoPlay loop="loop"/>
    </div>
}

export default Home;