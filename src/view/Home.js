import React from 'react';
import './Home.scss';
import {Button} from "../component";
import homeAudio from '../web-data/audio/home.mp3';
import {toPage} from "../utils/commonFun";

function Home(props) {
    return <div className="home card flex center-m">
            <div className="home-menu flex y">
                <Button onClick={toPage('/story')}>开始游戏</Button>
                <Button>退出游戏</Button>
            </div>
            <audio src={homeAudio} autoPlay loop="loop"/>
        </div>
}

export default Home;