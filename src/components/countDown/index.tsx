import React, {useState,useEffect}from 'react';
import {formatTime} from '../../utils/time'
import './index.less'

const CountDown = () => {

    const [count,setCount] =useState(15*60*1000)
    const [active,setActive] = useState(false)

    useEffect(()=>{
        const timer = setInterval(()=>{
            setCount(count-1000)
            setActive(!active)
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
            <div className={`cd-second-wrapper ${active?'roll':''}`}>
                <div className='cd-second-item front'>{second}</div>
                <div className='cd-second-item back'>{second}</div>
            </div>
        </div> )
    ;
}
 
export default CountDown;