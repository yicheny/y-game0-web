import React,{useState,useRef,useEffect} from 'react';
import axios from 'axios';
import {toPage} from "../utils/commonFun";
import docPath from '../web-data/doc/ch001.txt';
import './Story.scss';

function Story(props) {
    const [currentLine,setCurrentLine] = useState(null);
    const line = useRef(null);
    const data = useRef(null);

    useEffect(()=>{
        axios.get(docPath).then(res=>{
            data.current = res.data.split('\n');
            line.current = data.current.shift();
            showLine();
        }).catch(err=>console.error(err));
    },[]);

    return <div className="story card">
        <div className="lineBox" onClick={handleClick}>
            {currentLine}
        </div>
    </div>;

    function handleClick() {
        if(data.current.length===0) return toPage('/activity')();
        if(line.current!==currentLine) return null;
        line.current = data.current.shift();
        if(line.current) return showLine();
    }

    function showLine(i=1) {
        const timeId = setTimeout(()=>{
            const temp = line.current.split("").splice(0,i).join("");
            setCurrentLine(temp);
            if (temp !== line.current) showLine(i+1);
            clearTimeout(timeId);
        },60)
    }
}

export default Story;