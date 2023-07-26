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
                    <Box color={'purple'} angle={90} position={[0,3,0]}/>
                    <Box  color={'blue'} angle={180} position={[-3,0,0]}/>
                    <Box  color={'yellow'}  angle={270} position={[3,0,0]}/>
                    {/* <Box color={'red'} angle={270} position={[0,0,0]}/> */}
                    <Box color={'orange'} angle={360} position={[0,-3,0]}/>
                </Canvas>
            </div>
            <div>
                <CountDown />
            </div>
        </div>
    )
}

export default App;