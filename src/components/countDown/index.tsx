import React, {useState,useEffect}from 'react';
import {formatTime} from '../../utils/time'
import './index.less'

const CountDown = () => {

    const [count,setCount] =useState(15*60*1000)

    useEffect(()=>{
        const timer = setInterval(()=>{
            setCount(count-1000)
        },1000)
        return ()=>{
            clearInterval(timer)
        }
    },[count])
    const {hour,minute,second} = formatTime(count)

    return ( 
        <div className='cd-wrapper'>
            <div>{hour}:</div>
            <div>{minute}:</div>
            <div className='cd-second-item'>{second}</div>
        </div> )
    ;
}
 
export default CountDown;