import React ,{useRef,useState}from 'react';
import {useFrame } from '@react-three/fiber'

const Box = (props) => {
    const ref = useRef(null)
    const [hovered,setHovered] = useState(false)
    const [clicked,click] = useState(false)
    useFrame((state, delta) => (ref.current.rotation.y += delta))
    return ( 
        <mesh
            {...props}
            ref={ref}
            scale={clicked ? 2 : 1}
            onClick={()=>click(!clicked)}
            onPointerOver={()=>setHovered(true)}
            onPointerOut={()=>setHovered(false)}
        >
            <boxGeometry args={[1,1,1]}/>
            <meshStandardMaterial color={hovered?'hotpink':'orange'}/>
        </mesh>
    );
}
 
export default Box;