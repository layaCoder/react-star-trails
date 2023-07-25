import React ,{useRef,useState}from 'react';
import {useFrame } from '@react-three/fiber'

const Box = (props) => {
    const ref = useRef(null)
    const [hovered,setHovered] = useState(false)
    const [clicked,click] = useState(false)
    const {color = 'red'} = props
    let angle = 0
    useFrame((state, delta) =>{
        angle += 1 
        ref.current.position.x = Math.sin(angle*Math.PI/180)*3
        ref.current.position.y = Math.cos(angle*Math.PI/180)*3
        ref.current.rotation.x += 0.01
        ref.current.rotation.y += 0.01
    } )
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
            <meshStandardMaterial color={hovered?'orange':color}/>
        </mesh>
    );
}
 
export default Box;