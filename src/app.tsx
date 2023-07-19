import React from 'react';
import { Canvas } from '@react-three/fiber'
import CountDown from './components/countDown'
import Box from './components/box'
import './index.less'

function App() {
    return (
        <div id="canvas-container">
            <Canvas >
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <Box  position={[-1.2,0,0]}/>
                <Box  position={[1.2,0,0]}/>
            </Canvas>
            <div>
                <CountDown />
            </div>
        </div>
    )
}

export default App;