import React from 'react';
import { Canvas } from '@react-three/fiber'
import CountDown from './components/countDown'
import Box from './components/box'
import './index.less'

function App() {
    return (
        <div id="canvas-container">
            <div className='universal-area'>
                <Canvas >
                    <ambientLight />
                    <pointLight position={[10, 10, 10]} />
                    <Box color={'purple'} position={[0,3,0]}/>
                    <Box  color={'blue'} position={[-3,0,0]}/>
                    <Box  color={'yellow'} position={[3,0,0]}/>
                    <Box color={'red'} position={[0,0,0]}/>
                    <Box color={'orange'} position={[0,-3,0]}/>
                </Canvas>
            </div>
            <div>
                <CountDown />
            </div>
        </div>
    )
}

export default App;