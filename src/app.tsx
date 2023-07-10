import React from 'react';
import { Canvas } from '@react-three/fiber'
import CountDown from './components/countDown'
import './index.less'

function App() {
    return (
        <div id="canvas-container">
            <Canvas >
                <ambientLight intensity={0.5} />
                <directionalLight color="red" position={[0, 0, 5]} />
                <mesh>
                    <sphereGeometry args={[1,16,16]}/>
                    <meshStandardMaterial color="hotpink" transparent />
                </mesh>
            </Canvas>
            <div>
                <CountDown />
            </div>
        </div>
    )
}

export default App;